import * as types from './constants.jsx';



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