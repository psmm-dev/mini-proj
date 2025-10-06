import React, { useState } from "react";
import { LoginButtonWrapper as LoginButton } from "../../ui/Button/LoginButtonWrapper";
import { TextInputWrapper as TextInput } from "../../ui/TextInput/TextInputWrapper";
import { loginUser } from "../../store/features/authSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();

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
    <div className="login-form">
      <TextInput
        label="Username"
        placeholder="username"
        value={username}
        onChange={handleUsernameChange}
      />
      <TextInput
        label="Password"
        placeholder="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <LoginButton label="Test" onLogin={handleLogin} />
    </div>
  );
}

export default LoginForm;
