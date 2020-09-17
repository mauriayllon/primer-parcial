import { createAction, props } from "@ngrx/store";

export const AddProduct = createAction('[home]AddProduct', props<{product:any}>()); 