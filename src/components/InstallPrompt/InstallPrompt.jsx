import React, { useEffect, useState } from 'react';
import styles from './InstallPrompt.module.css';
import Button from '../Button';
import { BTN } from './constants';

export const InstallPrompt = () => {
  const [installPromptEvent, setInstallPromptEvent] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setInstallPromptEvent(event);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (installPromptEvent) {
      installPromptEvent.prompt();
      installPromptEvent.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        }
        setInstallPromptEvent(null);
      });
    }
  };

  return (
    <div className={styles.install}>
      {installPromptEvent && <Button className={styles.btn} label={BTN.label} onClick={handleInstallClick} type={BTN.type} size={BTN.size} />}
    </div>
  );
};
