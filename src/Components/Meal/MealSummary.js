import React from "react";

import Card from '../UI/Card'

import classes from './MealSummary.module.css'

const MealSummary = () => {
  return (
    <section className={classes.summary}>
      <h1>خواردنی نایاب، گەیاندنی بۆ تۆ</h1>
      <p>خواردنی دڵخوازی خۆت هەڵبژێرە کە لە لیستی خوارنەکاندا دیاریکراوە چێژ لە ژەمەکەت ببینە لە ماڵەوە</p>
      <p>خواردنەکانی ئێمە بە بەرزترین کوالێتی لە لایەن شیفی شارەزاوە ئامادە دەکرێن</p>
    </section>
  );
};

export default MealSummary;
