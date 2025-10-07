import React from 'react';
import styles from './MainPage.module.css';
import { useSelector } from 'react-redux';

const MainPage = () => {
  const auth = useSelector((state: any) => state.auth);
  const isAuthenticated = auth.isAuthenticated;

  const containerClass = isAuthenticated ? styles.container : styles.container + " " +styles.blur;
  return (
    <h1 className={containerClass}>Hello World!</h1>
    );
};

export default MainPage;