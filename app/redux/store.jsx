import {applyMiddleware, combineReducers , createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import {cartReducer, productReducer} from './reducers.jsx';

// The Reducer Function

//var createStoreWithMiddleware = applyMiddleware();
var reducers = combineReducers({
	cart:cartReducer,
	products:productReducer
});
//enhancer = compose(createStoreWithMiddleware);

//const store = createStore(userReducer, [], enhancer);
let store = createStore(reducers);
//const store = createStoreWithMiddleware(reducers);
export default store;