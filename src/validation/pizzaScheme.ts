import * as yup from "yup";
import * as joi from "joi";
import { PizzaValues } from "../../types";

const pizzaScheme: joi.ObjectSchema<PizzaValues> = joi.object({
  name: joi.string().trim().min(2).max(30).required(),
  sauce: joi.string().valid("white", "marinara", "pesto", "barbecue"),
  size: joi.string().valid("teeny", "pretty normal", "honkin'"),
  pepperoni: joi.boolean(),
  onions: joi.boolean(),
  sausage: joi.boolean(),
  bacon: joi.boolean(),
  olives: joi.boolean(),
  bellpeppers: joi.boolean(),
  pineapple: joi.boolean(),
  spinach: joi.boolean(),
  morecheese: joi.boolean(),
});

// yup.object().shape({
//     name: yup
//         .string()
//         .trim()
//         .required('Name is required')
//         .min(2, 'Name must be at least 2 characters'),
//     sauce: yup
//         .string()
//         .oneOf(['white','marinara','pesto','bbq'],'Must select a sauce'),
//     size: yup
//         .string()
//         .oneOf(['11','14','17'],'Must select a size'),
//     pepperoni: yup
//         .boolean(),
//     mushrooms: yup
//         .boolean(),
//     onions: yup
//         .boolean(),
//     sausage: yup
//         .boolean(),
//     bacon: yup
//         .boolean(),
//     olives: yup
//         .boolean(),
//     bellpeppers: yup
//         .boolean(),
//     pineapple: yup
//         .boolean(),
//     spinach: yup
//         .boolean(),
//     morecheese: yup
//         .boolean()
// })

export default pizzaScheme;
