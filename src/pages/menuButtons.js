import React from "react";
import { useState } from "react";
import styles from "./sumMenu.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const MenuButtons = ({ type }) => {
  const newType = type;
  const [inputValue, setInputValue] = useState("");
  const balance = useSelector((state) => state.balance);

  const handleUserInput = (e) => {
    setInputValue(e.target.value);
  };
  const resetBalance = (val) => {
    setInputValue("");
    if (val === "field") {
      dispatch({ type: type, payload: Number(inputValue) });
    } else {
      dispatch({ type: type, payload: val });
    }
  };

  const dispatch = useDispatch();

  return (
    <div>
      <h1 style={{ color: "#61dafb" }}>Balance ₪{balance}</h1>
      <div className={styles.sumButtonInput}>
        <input
          type="number"
          placeholder="Another amount"
          className={styles.input}
          value={inputValue}
          onChange={handleUserInput}
        />
        <button
          className={styles.sumButton}
          onClick={() => resetBalance("field")}
        >
          Enter
        </button>
      </div>

      <div className={styles.menuButtons}>
        <button className={styles.menuButton} onClick={() => resetBalance(50)}>
          {newType} 50
        </button>
        <button className={styles.menuButton} onClick={() => resetBalance(100)}>
          {newType} 100
        </button>
      </div>
      <div className={styles.menuButtons}>
        <button className={styles.menuButton} onClick={() => resetBalance(200)}>
          {newType} 200
        </button>
        <button className={styles.menuButton} onClick={() => resetBalance(500)}>
          {newType} 500
        </button>
      </div>
    </div>
  );
};
