import React from "react";
import "./App.css";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import {HomePage} from "./pages/homePage";
import { DepositPage } from "./pages/depositPage";
import { WithdrawPage } from "./pages/withdrawPage";

export const App=()=> {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <ul>
            <li className="li-style">
              <NavLink className="App-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="li-style">
              <NavLink className="App-link" to="/deposit">
                Deposit
              </NavLink>
            </li>
            <li className="li-style" style={{ marginRight: "38px" }}>
              <NavLink className="App-link" to="/withdraw">
                Withdraw
              </NavLink>
            </li>
          </ul>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/deposit" exact component={DepositPage}></Route>
          <Route path="/withdraw" exact component={WithdrawPage}></Route>
        </header>
      </div>
    </BrowserRouter>
  );
}
