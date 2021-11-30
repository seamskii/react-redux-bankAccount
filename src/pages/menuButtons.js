import React from "react";
import { useState, useRef } from "react";
import styles from "./sumMenu.module.css";
import { useDispatch } from "react-redux";

export const MenuButtons = ({ type }) => {
  const [selfSum, setSelfSum] = useState("");

  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.sumButtonInput}>
        <input
          type="number"
          placeholder="another amount"
          value={selfSum}
          onChange={(e) => setSelfSum(e.target.value)}
          className={styles.input}
        />
        <button
          className={styles.sumButton}
          onClick={() => dispatch({ type: type, payload: Number(selfSum) })}
        >
          Enter
        </button>
      </div>

      <div className={styles.menuButtons}>
        <button
          className={styles.menuButton}
          onClick={() => dispatch({ type: type, payload: 50 })}
        >
          {type === "WITHDRAW" ? "Withdraw" : "Deposit"} 50
        </button>
        <button
          className={styles.menuButton}
          onClick={() => dispatch({ type: type, payload: 100 })}
        >
          {type === "WITHDRAW" ? "Withdraw" : "Deposit"} 100
        </button>
      </div>
      <div className={styles.menuButtons}>
        <button
          className={styles.menuButton}
          onClick={() => dispatch({ type: type, payload: 200 })}
        >
          {type === "WITHDRAW" ? "Withdraw" : "Deposit"} 200
        </button>
        <button
          className={styles.menuButton}
          onClick={() => dispatch({ type: type, payload: 500 })}
        >
          {type === "WITHDRAW" ? "Withdraw" : "Deposit"} 500
        </button>
      </div>
    </div>
  );
};
