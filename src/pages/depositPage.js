import React from "react";
import { MenuButtons } from "./menuButtons";
import styles from "./sumMenu.module.css";

export const DepositPage = () => {
  return (
    <div className={styles.menuButtons}>
      <MenuButtons type={"DEPOSIT"} />
    </div>
  );
};
