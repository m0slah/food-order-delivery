import React, { Fragment } from "react";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButtons";

import mealCover from "../../asset/meal-cover.jpeg";

import i18n from "../../i18n";
import { initReactI18next } from "react-i18next";
import { useTranslation } from "react-i18next";

const tarnslationEn = {
  titleHeader: "Meal",
};

const tarnslationKr = {
  titleHeader: "ژەم",
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: tarnslationEn },
    kr: { translation: tarnslationKr },
  },
  lan: "en",
  fallbackLng: "en",
  interPolation: { escapeValue: false },
});

const Header = (props) => {

  const { t } = useTranslation();
  
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>{t("titleHeader")}</h1>
        <HeaderCartButton onClick={props.onshowCartHandler} />
      </header>
      <div className={classes["main-img"]}>
        <img src={mealCover} />
      </div>
    </Fragment>
  );
};

export default Header;
