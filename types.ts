interface PizzaValues {
  name: string;
  size: string;
  pepperoni: boolean;
  mushrooms: boolean;
  onions: boolean;
  sausage: boolean;
  bacon: boolean;
  olives: boolean;
  bellpeppers: boolean;
  pineapple: boolean;
  spinach: boolean;
  morecheese: boolean;
  sauce: string;
}

interface PizzaFormProps {
  values: PizzaValues;
  change: UpdateFunction;
  submit: StageFunction;
  disabled: boolean;
  errors: Errors;
}

interface Errors {
  name: string;
  size: string;
  sauce: string;
}

type UpdateFunction = (name: any, value: any) => void;
type ValidateFunction = (name: string, value: boolean | string) => void;
type OrderFunction = (pizzaWish: PizzaValues) => void;
type StageFunction = () => void;

export type {
  PizzaValues,
  PizzaFormProps,
  Errors,
  UpdateFunction,
  ValidateFunction,
  OrderFunction,
  StageFunction,
};
