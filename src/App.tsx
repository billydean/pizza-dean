import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";

import { Route, Routes, Link } from "react-router-dom";

import * as joi from "joi";

import Menu from "./components/Menu/Menu";
import Splash from "./components/Splash/Splash";
import PizzaForm from "./components/PizzaForm/PizzaForm";
// import pizzaScheme from "./validation/PizzaScheme";
import Pizza from "./components/Pizza/Pizza";
import type {
  Errors,
  PizzaValues,
  StageFunction,
  UpdateFunction,
  ValidateFunction,
} from "../types";

const initialValues: PizzaValues = {
  name: "",
  size: "",
  pepperoni: false,
  mushrooms: false,
  onions: false,
  sausage: false,
  bacon: false,
  olives: false,
  bellpeppers: false,
  pineapple: false,
  spinach: false,
  morecheese: false,
  sauce: "",
};

const initialErrors: Errors = {
  name: "",
  size: "",
  sauce: "",
};

const initialDisabled = false;

function App() {
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [pizzaWish, setPizzaWish] = useState({});

  const updateForm: UpdateFunction = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const stageOrder: StageFunction = () => {
    const pizza: PizzaValues = {
      name: formValues.name.trim(),
      size: formValues.size,
      pepperoni: formValues.pepperoni,
      mushrooms: formValues.mushrooms,
      onions: formValues.onions,
      sausage: formValues.sausage,
      bacon: formValues.bacon,
      olives: formValues.olives,
      bellpeppers: formValues.bellpeppers,
      pineapple: formValues.pineapple,
      spinach: formValues.spinach,
      morecheese: formValues.morecheese,
      sauce: formValues.sauce,
    };
    console.log(pizza);
  };

  // Worry about validation once everything wired up and mounting.
  // const validatePizza: ValidateFunction = (name, value) => {
  //   joi.assert(value, pizzaScheme[name])
  // }
  return (
    <div className="biggest-box">
      <Menu />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route
          path="/form"
          element={
            <PizzaForm
              values={formValues}
              change={updateForm}
              submit={stageOrder}
              disabled={disabled}
              errors={errors}
            />
          }
        />
        <Route path="/pizza" element={<Pizza />} />
      </Routes>
    </div>
  );
}

export default App;
