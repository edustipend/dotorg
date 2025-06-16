import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { tableOfContent, termsOfServiceContent } from './constant';

import styles from '../style.module.css';
import Header from '../../../components/Header';
import Container from '../../../components/Container';

const Terms = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const sidebar = useMemo(() => tableOfContent, []);
  const [expandedItems, setExpandedItems] = useState(new Set());

  const scrollToSection = (itemId) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(itemId);
      if (element) {
        setIsScrolling(true);
        const offset = 150;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const targetScrollPosition = elementPosition - offset;

        window.scrollTo({
          top: targetScrollPosition,
          behavior: 'smooth'
        });

        let scrollTimeout;
        const onScrollEnd = () => {
          clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => {
            if (Math.abs(window.pageYOffset - targetScrollPosition) < 5 || window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
              setIsScrolling(false);
              setActiveItem(itemId);
              window.removeEventListener('scroll', onScrollEnd);
            }
          }, 100);
        };

        window.addEventListener('scroll', onScrollEnd);

        setTimeout(() => {
          if (isScrolling) {
            setIsScrolling(false);
            setActiveItem(itemId);
            window.removeEventListener('scroll', onScrollEnd);
          }
        }, 1000);
      } else {
        console.warn(`Element with ID '${itemId}' not found.`);
      }
    }
  };

  const toggleExpanded = (itemId) => {
    setExpandedItems((prev) => {
      const newExpanded = new Set(prev);
      if (newExpanded.has(itemId)) {
        newExpanded.delete(itemId);
      } else {
        newExpanded.add(itemId);
      }
      return newExpanded;
    });
  };

  const checkActiveSection = useCallback(() => {
    if (isScrolling || typeof window === 'undefined') return;

    const allSectionIds = [];
    sidebar.forEach((item) => {
      allSectionIds.push(item.id);
      if (item.subItems) {
        item.subItems.forEach((subItem) => {
          allSectionIds.push(subItem.id);
          if (subItem.subItems) {
            subItem.subItems.forEach((nestedSubItem) => {
              allSectionIds.push(nestedSubItem.id);
            });
          }
        });
      }
    });

    const scrollThreshold = 150;

    let foundActive = false;
    for (const sectionId of allSectionIds) {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= scrollThreshold && rect.bottom >= scrollThreshold) {
          setActiveItem(sectionId);
          foundActive = true;

          const parentItem = sidebar.find(
            (item) =>
              item.id === sectionId ||
              (item.subItems &&
                item.subItems.some(
                  (subItem) => subItem.id === sectionId || (subItem.subItems && subItem.subItems.some((nestedSub) => nestedSub.id === sectionId))
                ))
          );

          if (parentItem && !expandedItems.has(parentItem.id)) {
            setExpandedItems((prev) => new Set([...prev, parentItem.id]));
          }

          if (parentItem && parentItem.subItems) {
            const intermediateParent = parentItem.subItems.find(
              (subItem) => subItem.subItems && subItem.subItems.some((nestedSub) => nestedSub.id === sectionId)
            );
            if (intermediateParent && !expandedItems.has(intermediateParent.id)) {
              setExpandedItems((prev) => new Set([...prev, intermediateParent.id]));
            }
          }

          break;
        }
      }
    }
    if (!foundActive && window.pageYOffset === 0) {
      setActiveItem(null);
    }
  }, [isScrolling, sidebar, expandedItems]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', checkActiveSection);
      checkActiveSection();
      return () => window.removeEventListener('scroll', checkActiveSection);
    }
  }, [checkActiveSection]);

  const renderSidebarItems = (items) => (
    <ul className={styles.sidebarList}>
      {items.map((item) => (
        <li key={item.id} className={styles.sidebarItem}>
          <div
            className={styles.sidebarMainItem}
            onClick={() => {
              scrollToSection(item.id);
              if (item.subItems) {
                toggleExpanded(item.id);
              }
            }}>
            <span
              className={`${styles.sidebarLink} ${
                activeItem === item.id ||
                (item.subItems &&
                  item.subItems.some(
                    (sub) => sub.id === activeItem || (sub.subItems && sub.subItems.some((nestedSub) => nestedSub.id === activeItem))
                  ))
                  ? styles.sidebarLinkActive
                  : ''
              }`}>
              <span className={styles.sidebarNumber}>{item.number}.</span>
              {item.title}
            </span>
          </div>
          {item.subItems && expandedItems.has(item.id) && renderSidebarItems(item.subItems)}
        </li>
      ))}
    </ul>
  );

  const renderContent = (contentItem, index) => {
    if (typeof contentItem === 'string') {
      return <span key={index}>{contentItem}</span>;
    } else if (contentItem.type === 'boldText') {
      return (
        <strong key={index} className={styles.boldText}>
          {contentItem.content}
        </strong>
      );
    } else if (contentItem.type === 'spaceTopSpan') {
      return (
        <span key={index} className={styles.spaceTop}>
          {contentItem.content}
        </span>
      );
    } else if (contentItem.type === 'spaceBottomSpan') {
      return (
        <span key={index} className={styles.spaceBottom}>
          {contentItem.content}
        </span>
      );
    }
    return null;
  };

  return (
    <main className={styles.main}>
      <Container>
        <section className={styles.pageContent}>
          <div className={styles.top}>
            <Header className={styles.header}>Terms of Service</Header>
            <p>Last Updated: June 16, 2025</p>
          </div>
          <section className={styles.contentWrapper}>
            <div className={styles.sidebar}>
              <div className={styles.tableOfContents}>
                <h3 className={styles.tableOfContentsTitle}>Table of Contents</h3>
                {renderSidebarItems(sidebar)}
              </div>
            </div>

            <div className={styles.content}>
              <section className={styles.sectionsContainer}>
                {termsOfServiceContent.map((section) => {
                  const sectionDivClass = `${styles[section.type] || styles.section}`;
                  const paragraphClass = `${styles.sectionContent}`;

                  return (
                    <div key={section.id} id={section.id} className={sectionDivClass}>
                      <h3 className={styles.sectionTitle}>
                        {section.number}. {section.title}
                      </h3>
                      <p className={paragraphClass}>
                        {section.content &&
                          section.content.map((item, idx) => (
                            <div key={idx}>
                              {renderContent(item, idx)}
                              {typeof item === 'string' && idx < section.content.length - 1}
                            </div>
                          ))}
                      </p>
                    </div>
                  );
                })}
              </section>
            </div>
          </section>
        </section>
      </Container>
    </main>
  );
};

export default Terms;
