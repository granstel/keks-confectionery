import {createAction} from '@reduxjs/toolkit';
import { Products } from '../types/product';

export const productsLoaded = createAction<Products>('productsLoaded');
