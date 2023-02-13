import React, { Fragment } from "react";

import classes from "./Header.module.css";
import CHeaderCartButton from "./HeaderCartButtons";

import mealCover from "../../asset/meal-cover.jpeg";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ژەم</h1>
        <CHeaderCartButton />
      </header>
      <div className={classes["main-img"]}>
        <img src={mealCover} />
      </div>
    </Fragment>
  );
};

export default Header;
