import * as types from './constants.js';



export function addProduct(product) {
	return {
		type: types.ADD_PRODUCT,
		product
	}
}
export  function addCart(cart) {
	return {
		type: types.ADD_CART,
		cart
	}
}
export  function filterProductsBy(filter) {
	
	return {
		type: types.FILTER_BY,
		filter
	}
}
export function removeCart(id) {
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