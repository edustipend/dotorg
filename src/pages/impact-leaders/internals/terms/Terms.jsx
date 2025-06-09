import styles from './Terms.module.css';
import Container from '../../../../components/Container';
import Header from '../../../../components/Header';
import { TERMS_AND_CONDITIONS_DATA } from './constant';

const Terms = () => {
  return (
    <div className={styles.termsContainer}>
      <Container>
        <div className={styles.termsContent}>
          <Header className={styles.termsTitle}>{TERMS_AND_CONDITIONS_DATA.header}</Header>

          {TERMS_AND_CONDITIONS_DATA.sections.map((section, index) => (
            <section key={index} className={styles.termsSection}>
              <h2>{section.title}</h2>
              {section.content && <p>{section.content}</p>}
              {section.intro && <p>{section.intro}</p>}
              {section.items && (
                <ul className={styles.termsListAlternative}>
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className={styles.termsListItem}>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: item
                            .replace(/(₦\d{1,3}(?:,\d{3})*\s+and\s+₦\d{1,3}(?:,\d{3})*)/, '<strong>$1</strong>')
                            .replace(/(Phase \d \(\d+%\))/, '<strong>$1</strong>')
                        }}
                      />
                    </li>
                  ))}
                </ul>
              )}
              {section.outro && <p>{section.outro}</p>}

              {section.intro1 && <p>{section.intro1}</p>}
              {section.items1 && (
                <ul className={styles.termsListAlternative}>
                  {section.items1.map((item, itemIndex) => (
                    <li key={`items1-${itemIndex}`} className={styles.termsListItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.intro2 && <p>{section.intro2}</p>}
              {section.items2 && (
                <ul className={styles.termsListAlternative}>
                  {section.items2.map((item, itemIndex) => (
                    <li key={`items2-${itemIndex}`} className={styles.termsListItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.additionalContent && section.additionalContent.map((para, paraIndex) => <p key={`additional-${paraIndex}`}>{para}</p>)}
            </section>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Terms;
