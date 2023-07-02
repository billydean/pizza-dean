import "./PizzaForm.scss";
import { useNavigate } from "react-router-dom";
import type {
  PizzaValues,
  UpdateFunction,
  StageFunction,
  Errors,
  PizzaFormProps,
} from "../../../types";
import { ChangeEvent, useState } from "react";

// NOTE for link to pizza product when form done
// <Link to="../pizza"></Link>
// link back home
// <Link to=".."></Link>

function PizzaForm(props: PizzaFormProps) {
  const [checkboxes, setCheckboxes] = useState(0);

  const navigate = useNavigate();
  const { values, change, submit, disabled, errors } = props;
  const update = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    // const useValue = type === "checkbox" ? checked : value;
    if (type === "checkbox") {
      if (!checked) {
        setCheckboxes(checkboxes - 1);
        change(name, checked);
      } else {
        setCheckboxes(checkboxes + 1);
        change(name, checked);
      }
    } else {
      change(name, value);
    }
    // change(name, useValue);
    console.log(checkboxes);
  };
  const updateSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    change(name, value);
  };

  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    submit();
    navigate("/pizza");
  };

  return (
    <form id="pizza-form" onSubmit={onSubmit}>
      <h2 id="form-heading">Build Your Own Pizza</h2>
      <div id="drop-downs">
        <label className="drop-down">
          <h3>Choice of Size</h3>
          <p>Required</p>
          <select name="size" onChange={updateSelect}>
            <option value="">--Size Options--</option>
            <option value="teeny">Little</option>
            <option value="pretty normal">Pretty Normal Size</option>
            <option value="honkin">Honkin'</option>
          </select>
        </label>
        <label className="drop-down">
          <h3>Choice of Sauce</h3>
          <p>Required</p>
          <select name="sauce" value={values.sauce} onChange={updateSelect}>
            <option value="">--Sauce Options--</option>
            <option value="marinara">Marinara</option>
            <option value="white">White</option>
            <option value="pesto">Pesto</option>
            <option value="barbecue">BBQ</option>
          </select>
        </label>
      </div>

      <div id="toppings">
        Add Toppings
        <p>Choose up to 4</p>
        <label className="topping-check">
          <input
            name="pepperoni"
            type="checkbox"
            checked={values.pepperoni}
            onChange={update}
            disabled={checkboxes > 3 && !values.pepperoni}
          />
          Pepperoni
        </label>
        <label className="topping-check">
          <input
            name="onions"
            type="checkbox"
            checked={values.onions}
            onChange={update}
            disabled={checkboxes > 3 && !values.onions}
          />
          Onions
        </label>
        <label className="topping-check">
          <input
            name="mushrooms"
            type="checkbox"
            checked={values.mushrooms}
            onChange={update}
            disabled={checkboxes > 3 && !values.mushrooms}
          />
          Mushrooms
        </label>
        <label className="topping-check">
          <input
            name="sausage"
            type="checkbox"
            checked={values.sausage}
            onChange={update}
            disabled={checkboxes > 3 && !values.sausage}
          />
          Sausage
        </label>
        <label className="topping-check">
          <input
            name="bacon"
            type="checkbox"
            checked={values.bacon}
            onChange={update}
            disabled={checkboxes > 3 && !values.bacon}
          />
          Bacon
        </label>
        <label className="topping-check">
          <input
            name="olives"
            type="checkbox"
            checked={values.olives}
            onChange={update}
            disabled={checkboxes > 3 && !values.olives}
          />
          Black Olives
        </label>
        <label className="topping-check">
          <input
            name="bellpeppers"
            type="checkbox"
            checked={values.bellpeppers}
            onChange={update}
            disabled={checkboxes > 3 && !values.bellpeppers}
          />
          Green Bell Peppers
        </label>
        <label className="topping-check">
          <input
            name="pineapple"
            type="checkbox"
            checked={values.pineapple}
            onChange={update}
            disabled={checkboxes > 3 && !values.pineapple}
          />
          Pineapple
        </label>
        <label className="topping-check">
          <input
            name="spinach"
            type="checkbox"
            checked={values.spinach}
            onChange={update}
            disabled={checkboxes > 3 && !values.spinach}
          />
          Spinach
        </label>
        <label className="topping-check">
          <input
            name="morecheese"
            type="checkbox"
            checked={values.morecheese}
            onChange={update}
            disabled={checkboxes > 3 && !values.morecheese}
          />
          Extra Cheese
        </label>
      </div>
      <label className="name-input">
        Name for the Order
        <input
          name="name"
          type="text"
          onChange={update}
          placeholder="Enter name"
          value={values.name}
        />
      </label>
      <div id="order-button">
        <button disabled={disabled}>Add to Order</button>
      </div>
      <div className="errors">
        <div>{errors.name}</div>
        <div>{errors.size}</div>
        <div>{errors.sauce}</div>
      </div>
      <div className="preview"></div>
    </form>
  );
}

export default PizzaForm;
