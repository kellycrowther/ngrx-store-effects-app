import { Action } from "@ngrx/store";

import { Topping } from "../../models/topping.model";

export const LOAD_TOPPINGS = "[Products] Load Toppings";

export const LOAD_TOPPINGS_FAIL = "[Products] Load Toppings Fail";

export const LOAD_TOPPINGS_SUCCESS = "[Products] Load Toppings Success";

export const VISUALISE_TOPPINGS = "[Products] Visualise Toppings";

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

export class VisualiseToppings implements Action {
  readonly type = VISUALISE_TOPPINGS;
  payload: number[];
  constructor(payload: number[]) {
    this.payload = payload;
  }
}

export type ToppingsAction =
  | LoadToppings
  | LoadToppingsFail
  | LoadToppingsSuccess
  | VisualiseToppings;
