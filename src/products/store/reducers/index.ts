import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import * as fromPizzas from "./pizzas.reducer";
import * as fromToppings from "./toppings.reducer";

// selector ask for different properties on the state data object

export interface ProductsState {
  pizzas: fromPizzas.PizzaState;
  toppings: fromToppings.ToppingsState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer,
  toppings: fromToppings.reducer
};

// this returns the 'products' object in the state object
export const getProductsState = createFeatureSelector<ProductsState>(
  "products"
);
