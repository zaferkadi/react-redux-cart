import {combineReducers } from 'redux';

module.exports = combineReducers({
	cart:  require('./cart.js'),
	products: require('./product.js')
});
// export default combineReducers({
// 	require('./cart.js'),
// 	require('./product.js')
// });