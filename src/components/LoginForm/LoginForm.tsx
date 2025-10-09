import React, { useEffect, useState } from "react";
import styles from "./LoginForm.module.css";

// component imports
import { Button } from "@ui/Button/ReactButtonWrapper";
import { Input } from "@ui/Input/ReactInputWrapper";
import { Text } from "@ui/Text/ReactTextWrapper";

// redux imports
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@store/features/authSlice";
import { AppDispatch } from "@store/store";

// asset imports
import userIcon from "@assets/user.svg";
import passIcon from "@assets/lock.svg";
import loginIcon from "@assets/login.svg";
import { Logo } from "@ui/Logo/ReactLogoWrapper";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: any) => state.auth);
  const { error, isAuthenticated, loading } = auth;
  const [btnClass, setBtnClass] = useState("");

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
      setUsername("");
      setPassword("");
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
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
      <Logo variant="large" />
      <Text text="++2Cart" variant="large" />
      <Input
        id="username-input"
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
        icon={userIcon}
      />
      <Input
        id="password-input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
        icon={passIcon}
      />
      <Button
        label="LOGIN"
        onClick={handleLogin}
        className={btnClass}
        isLoading={loading}
        icon={loginIcon}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
}

export default LoginForm;
