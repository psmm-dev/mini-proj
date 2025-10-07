import React from "react";
import styles from "./LoginContainer.module.css";
import LoginForm from "../LoginForm/LoginForm";
import { useSelector } from "react-redux";

const LoginContainer = () => {
    const auth = useSelector((state: any) => state.auth);
    const isAuthenticated = auth.isAuthenticated;

    const containerClass = isAuthenticated ? styles.hidden : styles.visible;

  return (
    <div className={styles.loginContainer + " " + containerClass}>
        <LoginForm />
    </div>
    );
};

export default LoginContainer;