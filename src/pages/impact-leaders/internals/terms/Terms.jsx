import styles from './Terms.module.css';
import Container from '../../../../components/Container';
import Header from '../../../../components/Header';

const Terms = () => {
  return (
    <div className={styles.termsContainer}>
      <Container>
        <div className={styles.termsContent}>
          <Header className={styles.termsTitle}>Terms and Conditions</Header>
          <section className={styles.termsSection}>
            <h2>1. Overview</h2>
            <p>
              The Edustipend Impact Leaders Program ("the Program") is an initiative designed to empower young social impact agents ("Participants")
              in Nigeria by supporting community-driven projects through funding, mentorship, and resources. Participation in the Program is subject
              to the following Terms and Conditions.
            </p>
          </section>

          <section className={styles.termsSection}>
            <h2>2. Eligibility</h2>
            <div className={styles.radioGroup}>
              <div className={styles.radioItem}>
                <input type="radio" id="eligibility-1" name="eligibility" className={styles.radioInput} />
                <label htmlFor="eligibility-1" className={styles.radioLabel}>
                  Must be a Nigerian citizen aged 18–35.
                </label>
              </div>
              <div className={styles.radioItem}>
                <input type="radio" id="eligibility-2" name="eligibility" className={styles.radioInput} />
                <label htmlFor="eligibility-2" className={styles.radioLabel}>
                  Must have an active project or clear proposal addressing social impact in an underserved community.
                </label>
              </div>
              <div className={styles.radioItem}>
                <input type="radio" id="eligibility-3" name="eligibility" className={styles.radioInput} />
                <label htmlFor="eligibility-3" className={styles.radioLabel}>
                  Must commit to the full duration of the program and all associated activities.
                </label>
              </div>
            </div>
          </section>

          <section className={styles.termsSection}>
            <h2>3. Project Fund Disbursement</h2>
            <p>
              Participants are eligible for a project fund ranging between <strong>₦250,000 and ₦500,000</strong>, disbursed in{' '}
              <strong>three (3) phases</strong>:
            </p>
            <div className={styles.radioGroup}>
              <div className={styles.radioItem}>
                <input type="radio" id="phase-1" name="disbursement-phases" className={styles.radioInput} />
                <label htmlFor="phase-1" className={styles.radioLabel}>
                  <strong>Phase 1 (40%)</strong> – Upon successful onboarding and submission of project plan, and signing of fund usage agreement.
                </label>
              </div>
              <div className={styles.radioItem}>
                <input type="radio" id="phase-2" name="disbursement-phases" className={styles.radioInput} />
                <label htmlFor="phase-2" className={styles.radioLabel}>
                  <strong>Phase 2 (30%)</strong> – Upon submission and approval of mid-term progress report and verified impact metrics.
                </label>
              </div>
              <div className={styles.radioItem}>
                <input type="radio" id="phase-3" name="disbursement-phases" className={styles.radioInput} />
                <label htmlFor="phase-3" className={styles.radioLabel}>
                  <strong>Phase 3 (30%)</strong> – Upon submission of a final report, impact evidence (photos/videos/testimonials), and satisfactory
                  project completion.
                </label>
              </div>
            </div>
            <p>
              Project disbursement at each phase is conditional and Edustipend reserves the right to pause disbursement at each phase, withhold or
              reclaim funds if misuse, inactivity, or dishonesty is identified.
            </p>
          </section>

          <section className={styles.termsSection}>
            <h2>4. Laptop Reward</h2>
            <p>
              Each participant who completes the program and fulfills all documentation and reporting requirements will be awarded{' '}
              <strong>one (1) brand new laptop</strong>. This is a performance-based reward, not an entitlement.
            </p>
          </section>

          <section className={styles.termsSection}>
            <h2>5. Use of Funds</h2>
            <p>
              <strong>Funds must:</strong>
            </p>
            <div className={styles.radioGroup}>
              <div className={styles.radioItem}>
                <input type="radio" id="funds-1" name="fund-usage" className={styles.radioInput} />
                <label htmlFor="funds-1" className={styles.radioLabel}>
                  Be used solely for project-related activities (materials, logistics, team costs, etc.).
                </label>
              </div>
              <div className={styles.radioItem}>
                <input type="radio" id="funds-2" name="fund-usage" className={styles.radioInput} />
                <label htmlFor="funds-2" className={styles.radioLabel}>
                  Not be used for personal political or religious expenses.
                </label>
              </div>
            </div>
            <p>Participants must maintain receipts and financial records for accountability purposes.</p>
          </section>

          <section className={styles.termsSection}>
            <h2>6. Risk Management & Disclaimers</h2>
            <p>
              <strong>Edustipend is not liable for:</strong>
            </p>
            <div className={styles.radioGroup}>
              <div className={styles.radioItem}>
                <input type="radio" id="liability-1" name="liability" className={styles.radioInput} />
                <label htmlFor="liability-1" className={styles.radioLabel}>
                  Personal injuries, loss, or damages incurred during project implementation.
                </label>
              </div>
              <div className={styles.radioItem}>
                <input type="radio" id="liability-2" name="liability" className={styles.radioInput} />
                <label htmlFor="liability-2" className={styles.radioLabel}>
                  Legal actions arising from participant-led activities.
                </label>
              </div>
              <div className={styles.radioItem}>
                <input type="radio" id="liability-3" name="liability" className={styles.radioInput} />
                <label htmlFor="liability-3" className={styles.radioLabel}>
                  Any project-related conflict, fraud, or misrepresentation by the participant or third-party collaborators/stakeholders.
                </label>
              </div>
            </div>
            <p>
              <strong>Participants must:</strong>
            </p>
            <div className={styles.radioGroup}>
              <div className={styles.radioItem}>
                <input type="radio" id="participant-1" name="participant-requirements" className={styles.radioInput} />
                <label htmlFor="participant-1" className={styles.radioLabel}>
                  Secure local permissions where necessary.
                </label>
              </div>
              <div className={styles.radioItem}>
                <input type="radio" id="participant-2" name="participant-requirements" className={styles.radioInput} />
                <label htmlFor="participant-2" className={styles.radioLabel}>
                  Conduct projects ethically and with community consent.
                </label>
              </div>
              <div className={styles.radioItem}>
                <input type="radio" id="participant-3" name="participant-requirements" className={styles.radioInput} />
                <label htmlFor="participant-3" className={styles.radioLabel}>
                  Avoid engagement in activities that may lead to reputational damage to Edustipend.
                </label>
              </div>
            </div>
          </section>

          <section className={styles.termsSection}>
            <h2>7. Intellectual Property & Media Use</h2>
            <p>
              Participants consent to Edustipend using their project outcomes, photos, videos, and testimonials for non-commercial purposes including
              marketing, reporting, and fundraising.
            </p>
            <p>Participants must give proper credit to Edustipend in all public communications.</p>
            <p>They must also inform the Edustipend Team before pushing out posts on social media concerning the projects and its activities.</p>
          </section>

          <section className={styles.termsSection}>
            <h2>8. Termination</h2>
            <p>
              <strong>Edustipend reserves the right to suspend or terminate participation if:</strong>
            </p>
            <div className={styles.radioGroup}>
              <div className={styles.radioItem}>
                <input type="radio" id="termination-1" name="termination-reasons" className={styles.radioInput} />
                <label htmlFor="termination-1" className={styles.radioLabel}>
                  Project funds are misused.
                </label>
              </div>
              <div className={styles.radioItem}>
                <input type="radio" id="termination-2" name="termination-reasons" className={styles.radioInput} />
                <label htmlFor="termination-2" className={styles.radioLabel}>
                  Milestones are not met.
                </label>
              </div>
              <div className={styles.radioItem}>
                <input type="radio" id="termination-3" name="termination-reasons" className={styles.radioInput} />
                <label htmlFor="termination-3" className={styles.radioLabel}>
                  Participant engages in unethical or illegal activity.
                </label>
              </div>
              <div className={styles.radioItem}>
                <input type="radio" id="termination-4" name="termination-reasons" className={styles.radioInput} />
                <label htmlFor="termination-4" className={styles.radioLabel}>
                  There is a breach of trust, false reporting, or reputational harm.
                </label>
              </div>
            </div>
            <p>
              <strong>Upon termination, the participant must:</strong>
            </p>
            <div className={styles.radioGroup}>
              <div className={styles.radioItem}>
                <input type="radio" id="termination-consequence-1" name="termination-consequences" className={styles.radioInput} />
                <label htmlFor="termination-consequence-1" className={styles.radioLabel}>
                  Return unused funds.
                </label>
              </div>
              <div className={styles.radioItem}>
                <input type="radio" id="termination-consequence-2" name="termination-consequences" className={styles.radioInput} />
                <label htmlFor="termination-consequence-2" className={styles.radioLabel}>
                  Submit an exit report.
                </label>
              </div>
              <div className={styles.radioItem}>
                <input type="radio" id="termination-consequence-3" name="termination-consequences" className={styles.radioInput} />
                <label htmlFor="termination-consequence-3" className={styles.radioLabel}>
                  Forfeit the laptop reward.
                </label>
              </div>
            </div>
          </section>

          <section className={styles.termsSection}>
            <h2>9. Confidentiality</h2>
            <p>
              All proprietary materials, strategy documents, and mentor guidance received during the program are confidential and must not be shared
              with third parties without prior written permission.
            </p>
          </section>

          <section className={styles.termsSection}>
            <h2>10. Dispute Resolution</h2>
            <p>
              <strong>Any disputes will be addressed through:</strong>
            </p>
            <div className={styles.radioGroup}>
              <div className={styles.radioItem}>
                <input type="radio" id="dispute-1" name="dispute-resolution" className={styles.radioInput} />
                <label htmlFor="dispute-1" className={styles.radioLabel}>
                  Internal mediation facilitated by Edustipend.
                </label>
              </div>
              <div className={styles.radioItem}>
                <input type="radio" id="dispute-2" name="dispute-resolution" className={styles.radioInput} />
                <label htmlFor="dispute-2" className={styles.radioLabel}>
                  Escalation to a third-party arbitrator if unresolved.
                </label>
              </div>
            </div>
            <p>
              <strong>Jurisdiction:</strong> Nigeria.
            </p>
          </section>

          <section className={styles.termsSection}>
            <h2>11. Agreement & Consent</h2>
            <p>
              <strong>By participating in the program, you acknowledge that:</strong>
            </p>
            <div className={styles.radioGroup}>
              <div className={styles.radioItem}>
                <input type="radio" id="agreement-1" name="agreement" className={styles.radioInput} />
                <label htmlFor="agreement-1" className={styles.radioLabel}>
                  You have read, understood, and agreed to these Terms and Conditions.
                </label>
              </div>
              <div className={styles.radioItem}>
                <input type="radio" id="agreement-2" name="agreement" className={styles.radioInput} />
                <label htmlFor="agreement-2" className={styles.radioLabel}>
                  You accept the responsibilities, risks, and obligations herein.
                </label>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default Terms;
