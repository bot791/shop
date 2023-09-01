import { configureStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const reducer = combineReducers({});

const initialState = {};

const middleware = [thunk];

const store = configureStore(
  reducer,
  initialState,
  applyMiddleware([...middleware])
);

export default store;
