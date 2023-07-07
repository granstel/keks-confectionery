import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { Products } from '../types/product';
import { AppDispatch, State } from '../types/state';
import { productsLoaded } from './action';

type payload = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

export const loadProducts = createAsyncThunk<void, undefined, payload>(
  'data/loadProducts',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Products>(APIRoute.Products);
    dispatch(productsLoaded(data));
  }
);
