import { Action } from "@ngrx/store";

import { Topping } from "../../models/topping.model";

export const LOAD_TOPPINGS = "[Products] Load Toppings";

export const LOAD_TOPPINGS_FAIL = "[Products] Load Toppings Fail";

export const LOAD_TOPPINGS_SUCCESS = "[Products] Load Toppings Success";

export class LoadToppings implements Action {
  readonly type = LOAD_TOPPINGS;
}

export class LoadToppingsFail implements Action {
  readonly type = LOAD_TOPPINGS_FAIL;
  payload: any;
  constructor(payload: any) {
    this.payload = payload;
  }
}

export class LoadToppingsSuccess implements Action {
  readonly type = LOAD_TOPPINGS_SUCCESS;
  payload: Topping[];
  constructor(payload: Topping[]) {
    this.payload = payload;
  }
}

export type ToppingsAction =
  | LoadToppings
  | LoadToppingsFail
  | LoadToppingsSuccess;
