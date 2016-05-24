import {applyMiddleware , createStore} from 'redux';
//import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import promise from 'redux-promise';
import reducers from './reducers/index.js';

//import {cartReducer, productReducer} from './reducers.jsx';

// The Reducersction

//var createStoreWithMiddleware = applyMiddleware();

// var reducers = combineReducers({
// 	cart:cartReducer,
// 	products:productReducer
// });


//enhancer = compose(createStoreWithMiddleware);

//const store = createStore(userReducer, [], enhancer);
// let store = createStore(reducers);
const logger = createLogger();
const store = createStore(reducers, applyMiddleware( promise, logger));
//const store = createStoreWithMiddleware(reducers);
export default store;