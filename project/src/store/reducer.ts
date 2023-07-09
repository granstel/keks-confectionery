import {createReducer} from '@reduxjs/toolkit';
import { Product, Products } from '../types/product';
import {productLoaded, productLoading, productsLoaded, productsLoading} from './action';

type State = {
  products: Products;
  isProductsLoading: boolean;
  product?: Product;
  isProductLoading: boolean;
}

const initialState: State = {
  products: [],
  isProductsLoading: false,
  product: undefined,
  isProductLoading: false
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(productsLoading, (state, action) => {
      state.isProductsLoading = action.payload;
    })
    .addCase(productsLoaded, (state, action) => {
      state.products = action.payload;
    })
    .addCase(productLoading, (state, action) => {
      state.isProductLoading = action.payload;
    })
    .addCase(productLoaded, (state, action) => {
      state.product = action.payload;
    });
});
