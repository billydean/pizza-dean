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
    const pizza = Object.create(formValues);
    pizza.name = formValues.name.trim();
    console.log(pizza);
  };

  // Worry about validation once everything wired up and mounting.
  // const validatePizza: ValidateFunction = (name, value) => {
  //   joi.assert(value, pizzaScheme[name])
  // }
  return (
    <>
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
      <div>
        <Link to="/form">DUMMY LINK TO PIZZA</Link>
      </div>

      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button></button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
