import React from "react";

import classes from "./HeaderCartButtons.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButtons = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>30</span>
    </button>
  );
};

export default HeaderCartButtons;
