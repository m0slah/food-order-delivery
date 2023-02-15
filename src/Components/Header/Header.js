import React, { Fragment } from "react";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButtons";

import mealCover from "../../asset/meal-cover.jpeg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ژەم</h1>
        <HeaderCartButton onClick={props.onshowCartHandler} />
      </header>
      <div className={classes["main-img"]}>
        <img src={mealCover} />
      </div>
    </Fragment>
  );
};

export default Header;
