import * as yup from "yup";
// import type { PizzaValues } from '../types';

const pizzaSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Name is required")
    .min(2, "name must be at least 2 characters"),
  sauce: yup
    .string()
    .oneOf(["white", "marinara", "pesto", "bbq"], "Must select a sauce"),
  size: yup.string().oneOf(["11", "14", "17"], "Must select a size"),
  pepperoni: yup.boolean(),
  mushrooms: yup.boolean(),
  onions: yup.boolean(),
  sausage: yup.boolean(),
  bacon: yup.boolean(),
  olives: yup.boolean(),
  bellpeppers: yup.boolean(),
  pineapple: yup.boolean(),
  spinach: yup.boolean(),
  morecheese: yup.boolean(),
});

export default pizzaSchema;
