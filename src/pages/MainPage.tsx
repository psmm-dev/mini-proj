import React from "react";
import styles from "./MainPage.module.css";
import { logout } from "../store/features/authSlice";
import { useDispatch, useSelector } from "react-redux";

const MainPage = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  const auth = useSelector((state: any) => state.auth);
  const isAuthenticated = auth.isAuthenticated;

  const containerClass = isAuthenticated
    ? styles.container
    : styles.container + " " + styles.blur;
  return (
    <>
      <h1 className={containerClass}>Hello World!</h1>
      <button className={styles.tempBtnStyle} onClick={handleLogout}>LOGOUT</button>
    </>
  );
};

export default MainPage;
