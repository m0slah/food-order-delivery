import React, { useContext } from "react";

import { Suspense } from "react";
import i18n from "../../i18n";
import { initReactI18next } from "react-i18next";
import { useTranslation } from "react-i18next";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../Store/CartContext";

import classes from "./HeaderCartButtons.module.css";

const tarnslationEn = {
  titleHeader: "Your Cart",
};

const tarnslationKr = {
  titleHeader: "کارتی تۆ",
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

const HeaderCartButtons = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const { t } = useTranslation();

  return (
    <div className={classes.headerButtons}>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>{t("cardText")}</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
        <Suspense fallback="loading...">
          <select name="language" onChange={changeLanguage}>
            <option value="en">English</option>
            <option value="kr">Kurdish</option>
          </select>
        </Suspense>
    </div>
  );
};

export default HeaderCartButtons;
