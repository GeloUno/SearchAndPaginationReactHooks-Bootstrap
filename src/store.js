import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducers/Jobs';

const initalState ={};

const middleware = [thunk];

const store = createStore(
    reducer,
     initalState,
      composeWithDevTools(applyMiddleware(...middleware)));

      export default store;