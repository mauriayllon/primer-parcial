import { state } from '@angular/animations';
import {Action, createReducer, on} from '@ngrx/store';
import { AddProduct } from './admin.actions';

export interface HomeState {
  items: any;
  totalAmount: number;
}

export const initialState: HomeState = {
  items: [],
  totalAmount: 0
};

const featureReducer = createReducer(
  initialState,
  on(AddProduct, (state,{product})=>({items:  state.items.push(product),...state}))
);

export function reducer(state: HomeState, action: Action): any {
  return featureReducer(state, action);
}