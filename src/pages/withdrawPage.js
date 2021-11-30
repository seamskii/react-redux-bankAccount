import React from "react";
import styles from "./sumMenu.module.css";
import { MenuButtons } from "./menuButtons";

export const WithdrawPage = () => {
  return (
    <div className={styles.menuButtons}>
      <MenuButtons type={"WITHDRAW"} />
    </div>
  );
};
