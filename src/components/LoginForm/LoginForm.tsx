import React, { useState } from "react";
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
  const error = auth.error;

  const handleLogin = () => {
    dispatch(loginUser({ username, password }));
    console.log("Login button clicked", username, password);
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
      <LoginInput
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
      />
      <LoginInput
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      {error && <div className="error">{error}</div>}
      <LoginButton label="Login" onLogin={handleLogin} />
    </div>
  );
}

export default LoginForm;
