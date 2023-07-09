import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { Product, Products } from '../types/product';
import { AppDispatch, State } from '../types/state';
import { productLoaded, productLoading, productsLoaded, productsLoading } from './action';

type payload = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

export const loadProducts = createAsyncThunk<void, undefined, payload>(
  'data/loadProducts',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(productsLoading(true));

    const { data } = await api.get<Products>(APIRoute.Products);
    dispatch(productsLoaded(data));

    dispatch(productsLoading(false));
  }
);

export const loadProduct = createAsyncThunk<void, string, payload>(
  'data/loadProduct',
  async (productId, { dispatch, extra: api }) => {
    dispatch(productLoading(true));

    const { data } = await api.get<Product>(`${APIRoute.Products}/${productId}`);
    dispatch(productLoaded(data));

    dispatch(productLoading(false));
  }
);
