import React from "react";
import { useSelector } from "react-redux";

export const HomePage = () => {
  const balance = useSelector((state) => state.balance);
  return (
    <div>
      <h1 style={{ color: "#61dafb" }}>Balance: ₪{balance}</h1>
    </div>
  );
};

export default HomePage;
