import * as types from './constants.js';



export function addProduct(product) {
	//console.log(product);
	return {
		type: types.ADD_PRODUCT,
		product
	}
}
export  function addCart(cart) {
	//console.log(cart);
	return {
		type: types.ADD_CART,
		cart
	}
}
export  function filterProductsBy(filter) {
	console.log('filterBy', filter);
	//console.log(cart);
	return {
		type: types.FILTER_BY,
		filter
	}
}
export function removeCart(id) {
	//console.log(cart);
	return {
		type: types.REMOVE_CART,
		id
	}
}



// module.exports = {
// 	addProduct: addProduct,
// 	addCart: addCart,
// 	removeCart:removeCart
// }