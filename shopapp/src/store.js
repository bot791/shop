import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const reducer = combineReducers({});

const initialState = {};

const middleware = [thunk];
//createStore is replaced by legacy_createStore
const store = legacy_createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
