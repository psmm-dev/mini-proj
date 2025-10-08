import React, { useEffect, useState } from "react";
import { LoginButtonWrapper as LoginButton } from "../../ui/Button/LoginButtonWrapper";
import { LoginInputWrapper as LoginInput } from "../../ui/LoginInput/LoginInputWrapper";
import { loginUser } from "../../store/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import styles from "./LoginForm.module.css";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: any) => state.auth);
  const {error, isAuthenticated} = auth
  const userIconSrc = "../../../public/assets/user.svg";
  const passIconSrc = "../../../public/assets/lock.svg";
  const [btnClass, setBtnClass] = useState("");


  console.log({username, password, isAuthenticated, error});
  useEffect(() => {
    if (error) {
      setBtnClass(styles.shake);
    }
    setTimeout(() => {
      setBtnClass("");
    }, 500);
  }, [error]);
  
  useEffect(() => {
    if (isAuthenticated) { 
      console.log("reset input");
      setUsername("");
      setPassword("");
    }
  }, [isAuthenticated]);

  const handleLogin = () => {
    dispatch(loginUser({ username, password }));
  };

  const handleUsernameChange = (e: Event) => {
    const customEvent = e as CustomEvent<{ value: string }>;
    setUsername(customEvent.detail?.value ?? "");
  };

  const handlePasswordChange = (e: Event) => {
    const customEvent = e as CustomEvent<{ value: string }>;
    setPassword(customEvent.detail?.value ?? "");
  };

  return (
    <div className={styles.container}>
      <img className={styles.logo} src="../../../public/assets/cart.svg"></img>
      <h1 className={styles.title}>++2Cart</h1>
      <LoginInput
        id="username-input"
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
        icon={userIconSrc}
      />
      <LoginInput
        id="password-input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
        icon={passIconSrc}
      />
      <LoginButton label="LOGIN" onLogin={handleLogin} className={btnClass} />

      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
}

export default LoginForm;
