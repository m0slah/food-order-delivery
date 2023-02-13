import React, { Fragment } from "react";
import MealAvailable from "./MealAvailable";
import MealSummary from "./MealSummary";

function Meal() {
  return (
    <Fragment>
      <MealSummary />
      <MealAvailable/>
    </Fragment>
  );
}

export default Meal;
