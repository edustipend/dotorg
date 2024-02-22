import React from 'react';
import LoginForm from '../../sections/LoginForm';

import styles from './Login.module.css';
export const Login = () => {
  return (
    <main className={styles.login}>
      <LoginForm />
    </main>
  );
};
