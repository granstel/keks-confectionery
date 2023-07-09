import {createAction} from '@reduxjs/toolkit';
import { Products } from '../types/product';

export const productsLoaded = createAction<Products>('productsLoaded');
export const productsLoading = createAction<boolean>('productsLoading');
export const productLoaded = createAction<Product>('productLoaded');
export const productLoading = createAction<boolean>('productLoading');
