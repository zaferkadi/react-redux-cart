import * as types from '../constants.js';
//const defaultState =[];// new Immutable.List();

module.exports = (state = [], action) =>{
  //console.log(state);
  switch(action.type){
    case types.ADD_CART:
      return state.concat(action.cart);
    case types.REMOVE_CART: {
      let removeIndex = -1;
      
      for(let i = 0 ; i < state.length; i++ ){
        if(state[i].id == action.id) {
          removeIndex =i;
          break;
        }
      }
      //return state.slice(0, removeIndex).concat(state.slice(removeIndex+1));
      return [...state.slice(0, removeIndex),
              ...state.slice(removeIndex+1)];
    }
      
    default:
      return state
  }
}