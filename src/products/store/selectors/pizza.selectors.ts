import { createSelector } from "@ngrx/store";

import * as fromRoot from "../../../app/store";
import * as fromFeature from "../reducers";
import * as fromPizzas from "../reducers/pizzas.reducer";
import * as fromToppings from "./toppings.selectors";
import { Pizza } from "src/products/models/pizza.model";

// const state = {
// featureModule in products.module
//     products: {
//         pizzas: {
//             data: [],
//             loaded: false,
//             loading: false,
//         }
//     }
// }

// pizza state - this returns the pizzas inside the products slice of state
// essentially getProductsState accesses state.products and then we access pizzas
export const getPizzaState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.pizzas
);

// these access products.pizzas.data or .loaded or .loading
export const getPizzasEntities = createSelector(
  getPizzaState,
  fromPizzas.getPizzasEntities
);

export const getSelectedPizza = createSelector(
  getPizzasEntities,
  fromRoot.getRouterState,
  (entities, router): Pizza => {
    return router.state && entities[router.state.params.pizzaId];
  }
);

export const getPizzaVisualise = createSelector(
  getSelectedPizza,
  fromToppings.getToppingEntities,
  fromToppings.getSelectedToppings,
  (pizza, toppingEntities, selectedToppings) => {
    const toppings = selectedToppings.map(id => toppingEntities[id]);
    return {
      ...pizza,
      toppings
    };
  }
);

export const getAllPizzas = createSelector(
  getPizzasEntities,
  entities => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  }
);

export const getPizzasLoaded = createSelector(
  getPizzaState,
  fromPizzas.getPizzasLoaded
);

export const getPizzasLoading = createSelector(
  getPizzaState,
  fromPizzas.getPizzasLoading
);
