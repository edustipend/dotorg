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
                <div className={styles.radioGroup}>
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className={styles.radioItem}>
                      <input
                        type="radio"
                        id={`${section.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${itemIndex}`}
                        name={`${section.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                        className={styles.radioInput}
                        readOnly
                      />
                      <label htmlFor={`${section.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${itemIndex}`} className={styles.radioLabel}>
                        {item.includes('₦') || item.includes('strong') ? (
                          <span
                            dangerouslySetInnerHTML={{
                              __html: item
                                .replace(/(\d+,\d+\s+and\s+₦\d+,\d+)/, '<strong>$1</strong>')
                                .replace(/(Phase \d \(\d+%\))/, '<strong>$1</strong>')
                            }}
                          />
                        ) : (
                          item
                        )}
                      </label>
                    </div>
                  ))}
                </div>
              )}
              {section.outro && <p>{section.outro}</p>}
              {section.intro1 && <p>{section.intro1}</p>}
              {section.items1 && (
                <div className={styles.radioGroup}>
                  {section.items1.map((item, itemIndex) => (
                    <div key={`items1-${itemIndex}`} className={styles.radioItem}>
                      <input
                        type="radio"
                        id={`${section.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}-1-${itemIndex}`}
                        name={`${section.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}-1`}
                        className={styles.radioInput}
                        readOnly
                      />
                      <label htmlFor={`${section.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}-1-${itemIndex}`} className={styles.radioLabel}>
                        {item}
                      </label>
                    </div>
                  ))}
                </div>
              )}
              {section.intro2 && <p>{section.intro2}</p>}
              {section.items2 && (
                <div className={styles.radioGroup}>
                  {section.items2.map((item, itemIndex) => (
                    <div key={`items2-${itemIndex}`} className={styles.radioItem}>
                      <input
                        type="radio"
                        id={`${section.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}-2-${itemIndex}`}
                        name={`${section.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}-2`}
                        className={styles.radioInput}
                        readOnly
                      />
                      <label htmlFor={`${section.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}-2-${itemIndex}`} className={styles.radioLabel}>
                        {item}
                      </label>
                    </div>
                  ))}
                </div>
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
