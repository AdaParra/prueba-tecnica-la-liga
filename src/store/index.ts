import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { reducerUserList } from './reducers';

const rootReducer = combineReducers({ reducerUserList });
export type RootState = ReturnType<typeof rootReducer>

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
