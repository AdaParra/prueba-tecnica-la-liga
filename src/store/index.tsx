import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from 'redux-thunk'
import { userList } from './reducers';

const rootReducer = combineReducers({ userList });

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
