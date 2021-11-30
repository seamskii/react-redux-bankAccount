import React from "react";
import { useSelector } from "react-redux";
import styles from "./sumMenu.module.css";

export const HomePage = () => {
  const balance = useSelector((state) => state.balance);
  return (
    <div>
      <h1 className={styles.balance}>Balance: ₪{balance}</h1>
      <a
        className={styles.balance}
        href="https://github.com/seamskii/react-redux-bankAccount"
      >
        GitHub
      </a>
    </div>
  );
};
