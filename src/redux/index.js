import { configureStore } from "@reduxjs/toolkit";
import { categoryReducer } from "./reducers/categoryReducer";
import { productReducer } from "./reducers/productReducer";
import { currencyReducer } from "./reducers/currencyReducer";
import { cartReducer } from "./reducers/cartReducer";

// Configure store automatically calls combine reducers
const reducer = {
  categories: categoryReducer,
  products: productReducer,
  currencies: currencyReducer,
  cartItems: cartReducer,
};

export const store = configureStore({
  reducer: reducer,
});
