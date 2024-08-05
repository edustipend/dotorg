import React, { useState } from 'react';
import Container from '../../components/Container';
import styles from './ReferPage.module.css';
import donationNetworkSVG from '../../assets/refer-frame.svg';
import Header from '../../components/Header';
import Button from '../../components/Button';
import referralPageCopy from './constants';
import Input from '../../components/Input';
import Leaderboard from './internals';
import { postData, REFERRAL_LINK } from '../../services/ApiClient';
import toast from 'react-hot-toast';

function ReferPage() {
  const [copySuccess, setCopySuccess] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [isLoading, setisLoading] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(generatedLink).then(
      () => {
        setCopySuccess('Copied!');
        setTimeout(() => setCopySuccess(''), 4000); // Clear message after 4 seconds
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

  const handleGenerateLink = async (e) => {
    e.preventDefault();

    if (!name) {
      setNameError('Please provide a name');
      return;
    }

    if (!email) {
      setEmailError('Please provide an email address');
      return;
    }

    setisLoading(true);

    try {
      const res = await postData(`${REFERRAL_LINK}`, { name, email });

      if (res.status) {
        toast('Referral link has been generated. Copy to share it with friends');
        setGeneratedLink(res?.data?.secureShortURL ?? '');

        // Clean up after successful link generation
        setName('');
        setEmail('');
        setNameError('');
        setEmailError('');
      } else {
        toast('Failed to generate referral link');
      }
    } catch (error) {
      toast('Error generating the referral link');
    } finally {
      setisLoading(false);
    }
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
              <Button
                size="medium"
                type="secondary"
                label="Generate Link"
                submit={true}
                loaderSize="small"
                loaderVariant="neutral"
                isLoading={isLoading}
              />
            </div>

            <p className={styles.referralText}>{referralPageCopy.referralText}</p>
            <div className={styles.referralLink}>
              {generatedLink && <p className={styles.genLink}>{generatedLink}</p>}
              {generatedLink && (
                <p className={styles.referralLinkCopy} onClick={handleCopyClick}>
                  {referralPageCopy.referralLinkCopy}
                </p>
              )}
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
