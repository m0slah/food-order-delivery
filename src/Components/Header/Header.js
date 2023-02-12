import React from "react";

import classes from "./Header.module.css";

import mealCover from '../../asset/meal-cover.jpeg'

const Header = () => {
  return (
    <div className={classes.header}>
      <header>
        <h1>ژەم</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-img"]}>
        <img src={mealCover}/>
      </div>
    </div>
  );
};

export default Header;
