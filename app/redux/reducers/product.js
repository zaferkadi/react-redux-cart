import * as types from '../constants.js';

// let initialState = {
//   filterBy :'',
//   products:[]
// }

module.exports = (state = [], action) =>{	
  //console.log(state);
	switch(action.type){
    case types.ADD_PRODUCT: {
      console.log('*');
      console.log(action);
      console.log(state);
      
      console.log('**');
      //let newState = {products:action.product};
      //return Object.assign({},state.products,newState);
      // return state.concat([action.product]);
      // let products= state.products.concat([action.product]);
      // return Object.assign({},state.products,products);
      // return [...state.product, products];
      return [...state,action.product];//return state.concat([action.product]);
      }
      case types.FILTER_BY:{
        //console.log(action);
        //console.log(state);
        return Object.assign({}, state, {
          filterBy: action.filter
        });
      }
    default:
  	 return state;
    }
}