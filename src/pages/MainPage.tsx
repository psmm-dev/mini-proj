import React from "react";
import styles from "./MainPage.module.css";

// component imports
import Header from "@components/Header/Header";
import MainContent from "@components/MainContent/MainContent";

import { useSelector } from "react-redux";

const MainPage = () => {
  const auth = useSelector((state: any) => state.auth);
  const isAuthenticated = auth.isAuthenticated;

  const containerClass = isAuthenticated
    ? styles.container
    : styles.container + " " + styles.blur;
  return (
    <div className={containerClass}>
      <Header />
      <MainContent />
    </div>
  );
};

export default MainPage;
