import * as types from './constants.jsx';
import Immutable from 'immutable';

const defaultState = new Immutable.List();

var cartReducer = function(state = defaultState, action) {
  switch(action.type){
    case types.ADD_CART:
      return state.concat(action.cart);
    case types.REMOVE_CART: {
      console.log(action);
      //console.log(state);
      var removeIndex =state.findIndex(item=>{
        //console.log(item.id);
        return item.id == action.id;
      });
      console.log(removeIndex);
      //console.log(state.indexOf(0));
      //var removeIndex = state.map(function(item) { return item.id; }).indexOf(action.cart.id);
      //console.log(removeIndex);
      return state.splice(removeIndex, 1);
      //let newState = state.delete({id:action.id.id});
      //console.log(newState);
      //return newState;
    }
      
    default:
      return state
  }
}

var productReducer= function(state = [], action) {	
	switch(action.type){
    case types.ADD_PRODUCT:
      return state.concat([action.product]);
      //return [...state,...action.product];
    default:
  	 return state;
    }
}

module.exports = {
  cartReducer:cartReducer,
  productReducer:productReducer
};// }