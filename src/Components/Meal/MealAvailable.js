import React from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

import classes from "./MealAvailable.module.css";

const Dummy_List = [
  {
    id: 1,
    name: "Suchi",
    price: "5.25",
  },
  {
    id: 2,
    name: "Pizza",
    price: "6.15",
  },
  {
    id: 3,
    name: "Hamburger",
    price: "5.50",
  },
  {
    id: 4,
    name: "Sandwich",
    price: "4.99",
  },
  {
    id: 5,
    name: "Fish",
    price: "10.50",
  },
  {
    id: 6,
    name: "Rice",
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
