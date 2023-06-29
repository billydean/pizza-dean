import "./PizzaForm.scss";
import { useNavigate } from "react-router-dom";
import type {
  PizzaValues,
  UpdateFunction,
  StageFunction,
  Errors,
  PizzaFormProps,
} from "../../../types";
import { ChangeEvent } from "react";

// NOTE for link to pizza product when form done
// <Link to="../pizza"></Link>
// link back home
// <Link to=".."></Link>

function PizzaForm(props: PizzaFormProps) {
  const cost = "TBD haha";
  const navigate = useNavigate();
  const { values, change, submit, disabled, errors } = props;
  const update = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    const useValue = type === "checkbox" ? checked : value;
    change(name, useValue);
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
      <h2>Build Your Own Pizza</h2>
      <label className="">
        Choice of Size
        <p>Required</p>
        <select id="size-dropdown" name="size" onChange={updateSelect}>
          <option value="">--Size Options--</option>
          <option value="11">Medium - 11"</option>
          <option value="14">Large - 14"</option>
          <option value="17">XLarge - 17"</option>
        </select>
      </label>
      <label>
        Choice of Sauce
        <p>Required</p>
        <select name="sauce" value={values.sauce} onChange={updateSelect}>
          <option value="">--Sauce Options--</option>
          <option value="marinara">Marinara</option>
          <option value="white">White</option>
          <option value="pesto">Pesto</option>
          <option value="bbq">BBQ</option>
        </select>
      </label>
      <div className="toppings">
        Add Toppings
        <p>Choose up to 10</p>
        <label>
          <input
            name="pepperoni"
            type="checkbox"
            checked={values.pepperoni}
            onChange={update}
          />
          Pepperoni
        </label>
        <label>
          <input
            name="onions"
            type="checkbox"
            checked={values.onions}
            onChange={update}
          />
          Onions
        </label>
        <label>
          <input
            name="mushrooms"
            type="checkbox"
            checked={values.mushrooms}
            onChange={update}
          />
          Mushrooms
        </label>
        <label>
          <input
            name="sausage"
            type="checkbox"
            checked={values.sausage}
            onChange={update}
          />
          Sausage
        </label>
        <label>
          <input
            name="bacon"
            type="checkbox"
            checked={values.bacon}
            onChange={update}
          />
          Bacon
        </label>
        <label>
          <input
            name="olives"
            type="checkbox"
            checked={values.olives}
            onChange={update}
          />
          Black Olives
        </label>
        <label>
          <input
            name="bellpeppers"
            type="checkbox"
            checked={values.bellpeppers}
            onChange={update}
          />
          Green Bell Peppers
        </label>
        <label>
          <input
            name="pineapple"
            type="checkbox"
            checked={values.pineapple}
            onChange={update}
          />
          Pineapple
        </label>
        <label>
          <input
            name="spinach"
            type="checkbox"
            checked={values.spinach}
            onChange={update}
          />
          Spinach
        </label>
        <label>
          <input
            name="morecheese"
            type="checkbox"
            checked={values.morecheese}
            onChange={update}
          />
          Extra Cheese
        </label>
      </div>
      <label className="">
        Name for the Order
        <input
          id="name-input"
          name="name"
          type="text"
          onChange={update}
          placeholder="Enter name"
          value={values.name}
        />
      </label>
      <div>
        <label className="">
          Quantity
          <input name="quantity" type="number" min="1" onChange={update} />
        </label>
        <p>Cost: {cost}</p>
        <button id="order-button" disabled={disabled}>
          Add to Order
        </button>
      </div>
      <div className="errors">
        <div>{errors.name}</div>
        <div>{errors.size}</div>
        <div>{errors.sauce}</div>
      </div>
    </form>
  );
}

export default PizzaForm;
