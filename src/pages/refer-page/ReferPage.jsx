import React, { useState } from 'react';
import Container from '../../components/Container';
import styles from './ReferPage.module.css';
import donationNetworkSVG from '../../assets/refer-frame.svg';
import Header from '../../components/Header';
import Button from '../../components/Button';
import referralPageCopy from './constants';
import Input from '../../components/Input';
import Leaderboard from './internals';

function ReferPage() {
  const [copySuccess, setCopySuccess] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
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

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) {
      setEmailError('');
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (nameError) {
      setNameError('');
    }
  };

  const handleGenerateLink = (e) => {
    e.preventDefault();
    //@TODO: Make api call to generate link and paste it input field
    // Clean this up when api call to geenerate link is implemented
    if (!name) {
      setNameError('Please provide a name');
      return;
    }
    if (!email) {
      setEmailError('Please provide an email address');
      return;
    }
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
            <Header className={styles.header} size="medium">
              {referralPageCopy.referHeader}
            </Header>
          </div>
          <p className={styles.referParagraph}>{referralPageCopy.referParagraph}</p>

          <form className={styles.referForm} onSubmit={handleGenerateLink}>
            <Input value={name} error={nameError} label="Name" placeholder="Enter name" className={styles.entry} onChange={handleNameChange} />

            <Input
              error={emailError}
              value={email}
              label="Email"
              placeholder="Enter email"
              className={styles.entry}
              type="email"
              onChange={handleEmailChange}
            />

            <div className={styles.referFormButton}>
              <Button size="medium" type="secondary" label="Generate Link" submit={true} />
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
        <Leaderboard />
      </Container>
    </main>
  );
}

export default ReferPage;
