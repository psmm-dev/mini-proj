import React from "react";
import styles from "./Header.module.css";

// component imports
import { Logo } from "@ui/Logo/ReactLogoWrapper";
import { Text } from "@ui/Text/ReactTextWrapper";
import { Button } from "@ui/Button/ReactButtonWrapper";

// asset imports
import logoutIcon from "@assets/logout.svg";

// store imports
import { logout } from "@store/features/authSlice";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const auth = useSelector((state: any) => state.auth);
  const name = auth.user?.user || "User";
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  const greeting = "Hello " + name + "!";
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <Logo variant="large" />
        <Text text="++2Cart" variant="header" />
      </div>
      <div className={styles.rightSection}>
        <Button
          className={styles.logoutBtn}
          onClick={handleLogout}
          label="LOGOUT"
          width="120px"
          icon={logoutIcon}
        />
        <Text text={greeting} variant="greetings" />
      </div>
    </div>
  );
};

export default Header;
