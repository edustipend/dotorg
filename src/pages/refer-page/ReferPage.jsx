import React, { useState } from 'react';
import Container from '../../components/Container';
import styles from './ReferPage.module.css';
import donationNetworkSVG from '../../assets/refer-frame.svg';
import Header from '../../components/Header';
import Button from '../../components/Button';
import referralPageCopy from './constants';
import Input from '../../components/Input';

function ReferPage() {
  const [copySuccess, setCopySuccess] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');

  const handleCopyClick = () => {
    const referralLink = referralPageCopy.referralLink;
    navigator.clipboard.writeText(referralLink).then(
      () => {
        setCopySuccess('Copied!');
        setTimeout(() => setCopySuccess(''), 2000); // Clear message after 2 seconds
      },
      (err) => {
        setCopySuccess('Failed to copy');
      }
    );
  };

  const handleGenerateLink = () => {
    //@TODO: Make api call to generate link and paste it input field
    // Clean this up when api call to geenerate link is implemented
    setGeneratedLink(referralPageCopy.referralLink);
  };

  return (
    <main className={styles.referPage}>
      <Container>
        <div className={styles.donationNetwork}>
          <img src={donationNetworkSVG} alt="Donation network frame" />
        </div>

        <div className={styles.referFormSection}>
          <div className={styles.referHeader}>
            <Header size="medium">{referralPageCopy.referHeader}</Header>
          </div>
          <p className={styles.referParagraph}>{referralPageCopy.referParagraph}</p>

          <form action="" className={styles.referForm}>
            <Input value={name} label="Name" placeholder="Enter name" className={styles.entry} onChange={(e) => setName(e.target.value)} />
            <Input value={email} label="Email" placeholder="Enter email" className={styles.entry} onChange={(e) => setEmail(e.target.value)} />

            <div className={styles.referFormButton}>
              <Button size="medium" type="secondary" label="Generate Link" onClick={handleGenerateLink} />
            </div>

            <p className={styles.referralText}>{referralPageCopy.referralText}</p>
            <div className={styles.referralLink}>
              <p>{generatedLink}</p>

              <p className={styles.referralLinkCopy} onClick={handleCopyClick}>
                {referralPageCopy.referralLinkCopy}
              </p>
            </div>
            {copySuccess && <p className={styles.copySuccess}>{copySuccess}</p>}
          </form>
        </div>
      </Container>
    </main>
  );
}

export default ReferPage;
