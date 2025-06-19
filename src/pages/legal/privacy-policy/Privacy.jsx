import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { tableOfContent, privacyPolicyContent } from './constant';
import styles from '../style.module.css';
import Header from '../../../components/Header';
import Container from '../../../components/Container';

const Privacy = () => {
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
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });

        const checkScrollEnd = () => {
          if (window.pageYOffset === elementPosition - offset) {
            setIsScrolling(false);
            setActiveItem(itemId);
          } else {
            requestAnimationFrame(checkScrollEnd);
          }
        };
        checkScrollEnd();
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

    for (const sectionId of allSectionIds) {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveItem(sectionId);

          const parentItem = sidebar.find(
            (item) =>
              item.subItems &&
              item.subItems.some(
                (subItem) => subItem.id === sectionId || (subItem.subItems && subItem.subItems.some((nestedSub) => nestedSub.id === sectionId))
              )
          );

          if (parentItem) {
            setExpandedItems((prev) => {
              const newExpanded = new Set([...prev, parentItem.id]);
              const intermediateParent = parentItem.subItems.find(
                (subItem) => subItem.subItems && subItem.subItems.some((nestedSub) => nestedSub.id === sectionId)
              );
              if (intermediateParent) {
                newExpanded.add(intermediateParent.id);
              }

              return newExpanded;
            });
          }
          break;
        }
      }
    }
  }, [isScrolling, sidebar]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', checkActiveSection);
      return () => window.removeEventListener('scroll', checkActiveSection);
    }
  }, [checkActiveSection]);

  const renderSidebarItems = (items) => (
    <ul className={styles.sidebarList}>
      {items.map((item) => (
        <li key={item.id} className={styles.sidebarItem}>
          <div className={styles.sidebarMainItem} onClick={() => (item.subItems ? toggleExpanded(item.id) : scrollToSection(item.id))}>
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
            <Header className={styles.header}>Privacy Policy</Header>
            <p>Last Updated: June 9, 2025</p>
          </div>
          <section className={styles.contentWrapper}>
            <div className={styles.sidebar}>
              <div className={styles.tableOfContents}>
                <h3 className={styles.tableOfContentsTitle}>Table of Contents</h3>
                {renderSidebarItems(sidebar)}
              </div>
            </div>

            <div className={styles.content}>
              {privacyPolicyContent.map((section) => {
                if (section.id === 'intro' && section.type === 'paragraph') {
                  return (
                    <div key={section.id}>
                      <p className={styles.introText}>
                        {section.content.map((paragraph, idx) => (
                          <div key={idx}>
                            {paragraph}
                            {idx < section.content.length - 1 && (
                              <>
                                <br />
                                <br />
                              </>
                            )}
                          </div>
                        ))}
                      </p>
                    </div>
                  );
                }
                return null;
              })}

              <section className={styles.sectionsContainer}>
                {privacyPolicyContent.map((section) => {
                  if (section.id !== 'intro') {
                    const sectionDivClass = `${styles[section.type] || styles.section}`;
                    const paragraphClass = `${styles.sectionContent} ${section.type === 'sectionLargeAlt' ? styles.sectionContentAlt : ''}`;
                    return (
                      <div key={section.id} id={section.id} className={sectionDivClass}>
                        <h3 className={styles.sectionTitle}>
                          {section.number}. {section.title}
                        </h3>
                        <p className={paragraphClass}>
                          {section.content && section.content.map(renderContent)}
                          {section.subsections &&
                            section.subsections.map((subsection) => (
                              <div key={subsection.id}>
                                {subsection.number && <br />}
                                <strong className={styles.boldText} id={subsection.id}>
                                  {subsection.number}. {subsection.title}
                                </strong>
                                {subsection.content.map(renderContent)}
                                {subsection.subsections &&
                                  subsection.subsections.map((nestedSub) => (
                                    <div key={nestedSub.id}>
                                      <br />
                                      <strong className={styles.boldText} id={nestedSub.id}>
                                        {nestedSub.number}. {nestedSub.title}
                                      </strong>
                                      {nestedSub.content.map(renderContent)}
                                    </div>
                                  ))}
                              </div>
                            ))}
                        </p>
                      </div>
                    );
                  }
                  return null;
                })}
              </section>
            </div>
          </section>
        </section>
      </Container>
    </main>
  );
};

export default Privacy;
