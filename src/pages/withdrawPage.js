import React from "react";
import styles from "./sumMenu.module.css";
import { useSelector } from "react-redux";
import { MenuButtons } from "./menuButtons";

export const WithdrawPage = () => {
  const balance = useSelector((state) => state.balance);
  return (
    <div>
      <h1 style={{ color: "#61dafb" }}>Balance ₪{balance}</h1>
      <div className={styles.menuButtons}>
        <MenuButtons type={"WITHDRAW"} />
      </div>
    </div>
  );
};
