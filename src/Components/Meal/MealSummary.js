import React from "react";

import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { initReactI18next } from "react-i18next";

import classes from "./MealSummary.module.css";

const tarnslationEn = {
  title: "Delicious Food, Delivered To You",
  discreption1:
    " Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.",
  discreption2:
    "  All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!",
};

const tarnslationKr = {
  title: "خواردنی نایاب، گەیاندنی بۆ تۆ",
  discreption1:
    "  خواردنی دڵخوازی خۆت هەڵبژێرە کە لە لیستی خوارنەکاندا دیاریکراوە چێژ لە ژەمەکەت ببینە لە ماڵەوە",
  discreption2:
    "خواردنەکانی ئێمە بە بەرزترین کوالێتی لە لایەن شیفی شارەزاوە ئامادە دەکرێن",
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

const MealSummary = () => {
  const { t } = useTranslation();

  return (
    <section className={classes.summary}>
      <h1>{t("title")}</h1>
      <p>{t("discreption1")}</p>
      <p>{t("discreption2")}</p>
    </section>
  );
};

export default MealSummary;
