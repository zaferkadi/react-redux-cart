import React from 'react';
import ItemContainer from './components/ItemContainer.jsx';
//import {Map,List} from 'immutable';
import store from './redux/store.jsx';
import {addProduct,addCart} from './redux/actions.js';

import { Provider } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'App';
  }
  render() {
    //console.log(addProduct);
    for( var i = 1 ; i<20; i++) {
      //store.dispatch(addProduct({id:i, text: 'Product '+i, type:'shoes', price: 110,images:['p1.png','p2.png','p3.png']}));  
    }
    
    store.dispatch(addProduct({id:1, text: 'Product A', type:'shirt', price: 110,images:['p1.png','p2.png','p3.png']}));
    store.dispatch(addProduct({id:2, text: 'Product B', type:'shirt', price: 220,images:['p1.png','p2.png','p3.png']}));
    store.dispatch(addProduct({id:3, text: 'Product C', type:'shirt', price: 70,images:['p1.png','p2.png','p3.png']}));
    store.dispatch(addProduct({id:4, text: 'Product D', type:'shoe', price: 90,images:['p1.png','p2.png','p3.png']}));
    store.dispatch(addProduct({id:5, text: 'Product E', type:'shoe', price: 45,images:['p1.png','p2.png','p3.png']}));
    store.dispatch(addProduct({id:6, text: 'Product F', type:'shoe', price: 67,images:['p1.png','p2.png','p3.png']}));
    store.dispatch(addProduct({id:7, text: 'Product G', type:'shoe', price: 30,images:['p1.png','p2.png','p3.png']}));
    {/*
    store.dispatch(addCart({ price: 90,text: 'D'}));
     store.dispatch({
      type: 'ADD_PRODUCT',
      product: {text: 'A', price: 110}
    });
    */}
    //console.log(store.getState());
    /*const products = List([
      Map({text:"A", price: 120}),
      Map({text:"D", price: 130}),
      Map({text:"B", price: 150}),
      Map({text:"C", price: 360})
    ]);*/
    //var products = [{text:"A", price: 120},{text:"B", price: 150}, {text:"C", price: 360}, {text:"D", price: 130}];
    return <div><Provider store={store}><ItemContainer/></Provider></div>;
    }
  }
  
  
  export default App;
