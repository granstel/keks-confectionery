import {createReducer} from '@reduxjs/toolkit';
import {productsLoaded} from './action';

type State = {
  products: undefined;
}

const initialState: State = {
  products: undefined
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(productsLoaded, (state, action) => {
      state.products = action.payload;
    });
});
