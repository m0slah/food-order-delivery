import React from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

import classes from "./MealAvailable.module.css";

import i18n from "../../i18n";
import { initReactI18next } from "react-i18next";
import { useTranslation } from "react-i18next";


const tarnslationEn = {
  sushi: "Sushi",
};

const tarnslationKr = {
  sushi: "سوشی",
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


const Dummy_List = [
  {
    id: 1,
    name: "Sushi(سوشی)",
    price: "5.25",
  },
  {
    id: 2,
    name: "Pizza(پیتسا)",
    price: "6.15",
  },
  {
    id: 3,
    name: "hamburger(بەرگر)",
    price: "5.50",
  },
  {
    id: 4,
    name: "sandwich(ساندویچ)",
    price: "4.99",
  },
  {
    id: 5,
    name: "Fish(ماسی)",
    price: "10.50",
  },
  {
    id: 6,
    name: "Rice(برنج)",
    price: "3.10",
  },
];

const MealAvailable = () => {
  const meals = Dummy_List.map((meal) => (
    <MealItem key={meal.id} id={meal.id} name={meal.name} price={meal.price} />
  ));

  return (
    <div className={classes["meals-list"]}>
      <Card>
        <ul>{meals}</ul>
      </Card>
    </div>
  );
};

export default MealAvailable;
