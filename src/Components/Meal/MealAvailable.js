import React from "react";

import Card from '../UI/Card';

import classes from "./MealAvailable.module.css";

const Dummy_List = [
  {
    id: 1,
    name: "Suchi",
    price: "5",
  },
  {
    id: 2,
    name: "Pizza",
    price: "6",
  },
  {
    id: 3,
    name: "Hamburger",
    price: "4",
  },
  {
    id: 3,
    name: "Sandwich",
    price: "4",
  },
  {
    id: 3,
    name: "Fish",
    price: "4",
  },
  {
    id: 3,
    name: "Rice",
    price: "4",
  },
];

const MealAvailable = () => {
  const lists = Dummy_List.map((list) => <li>{list.name}</li>);

  return (
    <div className={classes["meals-list"]}>
      <Card>
        <ul>{lists}</ul>
      </Card>
    </div>
  );
};

export default MealAvailable;
