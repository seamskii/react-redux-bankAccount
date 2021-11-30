import React from "react";
import { useSelector } from "react-redux";
import { MenuButtons } from "./menuButtons";
import styles from "./sumMenu.module.css";

export const DepositPage = () => {
  const balance = useSelector((state) => state.balance);
  return (
    <div>
      <h1 style={{ color: "#61dafb" }}>Balance ₪{balance}</h1>

      <div className={styles.menuButtons}>
        <MenuButtons type={"DEPOSIT"} />
      </div>
    </div>
  );
};
