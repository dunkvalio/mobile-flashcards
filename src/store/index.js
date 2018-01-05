import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const initialState = {};

export default createStore(
  reducers,
  initialState,
  compose(applyMiddleware(thunk)),
);