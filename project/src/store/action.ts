import {createAction} from '@reduxjs/toolkit';
import { Product, Products } from '../types/product';

export const productsLoading = createAction<boolean>('productsLoading');
export const productsLoaded = createAction<Products>('productsLoaded');
export const productLoading = createAction<boolean>('productLoading');
export const productLoaded = createAction<Product>('productLoaded');
