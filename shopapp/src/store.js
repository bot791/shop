import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { productListReducer } from "./reducers/productReducers";

const reducer = combineReducers({
  productList: productListReducer,
});

const initialState = {};

const middleware = [thunk];
//createStore is replaced by legacy_createStore
const store = legacy_createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
