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
    
      
    let data  = require('./data.js');
    console.log(data);
    for (var i = 0; i < data.length ; i++) {
      let prodName = 'Product '+Math.random().toString(32).substr(2,5);
      data[i].text = prodName;
      data[i].price = parseInt(Math.random().toString(10).substring(2,4));
      store.dispatch(addProduct(data[i]));
    }
    //store.dispatch(addProduct({id:1, text: prodName, type:'shirt', price: 110,images:['p1.png','p2.png','p3.png']}));
            
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
