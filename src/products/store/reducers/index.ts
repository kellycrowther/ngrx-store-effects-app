import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPizzas from './pizzas.reducer';

// selector ask for different properties on the state data object

export interface ProductsState {
    pizzas: fromPizzas.PizzaState
}

export const reducers: ActionReducerMap<ProductsState> = {
    pizzas: fromPizzas.reducer
}

// this returns the 'products' object in the state object
export const getProductsState = createFeatureSelector<ProductsState>('products');

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
    getProductsState,
    (state: ProductsState) => state.pizzas
);

// these access products.pizzas.data or .loaded or .loading
export const getAllPizzas = createSelector(
    getPizzaState,
    fromPizzas.getPizzas
)

export const getPizzasLoaded = createSelector(
    getPizzaState,
    fromPizzas.getPizzasLoaded
)

export const getPizzasLoading = createSelector(
    getPizzaState,
    fromPizzas.getPizzasLoading
)
