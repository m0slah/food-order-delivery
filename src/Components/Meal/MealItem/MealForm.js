import React, { useState } from "react";
import { useRef } from "react";
import classes from "./MealForm.module.css";
import Input from "../../UI/Input";

import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import { initReactI18next } from "react-i18next";

const tarnslationEn = {
  formButton: "Add",
  FormLabel:"Amount"
};

const tarnslationKr = {
  formButton: "زیادکردن",
  FormLabel:"دانە"
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

const MealForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const eneteredAmount = amountInputRef.current.value;
    const eneteredAmountNumber = +eneteredAmount;

    if (
      eneteredAmount.trim().length === 0 ||
      eneteredAmountNumber < 1 ||
      eneteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(eneteredAmountNumber);
  };

  const { t } = useTranslation();

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label={t("FormLabel")}
        input={{
          id: props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+{t("formButton")}</button>
      {!amountIsValid && <p>Please eneter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealForm;
