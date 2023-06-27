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

interface Errors {
  name: string;
  size: string;
  sauce: string;
}

type UpdateFunction = (name: any, value: any) => void;
type ValidateFunction = (name: any, value: any) => void;
type OrderFunction = (pizzaWish: PizzaValues) => void;
type StageFunction = () => void;

export type {
  PizzaValues,
  Errors,
  UpdateFunction,
  ValidateFunction,
  OrderFunction,
  StageFunction,
};
