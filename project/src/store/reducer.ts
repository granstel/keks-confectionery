import {createReducer} from '@reduxjs/toolkit';
import { Products } from '../types/product';
import {productsLoaded} from './action';

type State = {
  products: Products;
}

const initialState: State = {
  products: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(productsLoaded, (state, action) => {
      state.products = action.payload;
    });
});
