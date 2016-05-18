import React from 'react';
import Parent from './components/Parent.jsx';
//import {Map,List} from 'immutable';
import store from './redux/store.jsx';
import {addProduct,addCart} from './redux/actions.jsx';

import { Provider } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'App';
  }
  render() {
    //console.log(addProduct);
    store.dispatch(addProduct({id:1, text: 'Product A', price: 110}));
    store.dispatch(addProduct({id:2, text: 'Product B', price: 220}));
    store.dispatch(addProduct({id:3, text: 'Product C', price: 70}));
    store.dispatch(addProduct({id:4, text: 'Product D', price: 90}));
    //store.dispatch(addCart({ price: 90,text: 'D'}));
    // store.dispatch({
    //   type: 'ADD_PRODUCT',
    //   product: {text: 'A', price: 110}
    // });
    //console.log(store.getState());
    /*const products = List([
      Map({text:"A", price: 120}),
      Map({text:"D", price: 130}),
      Map({text:"B", price: 150}),
      Map({text:"C", price: 360})
    ]);*/
    //var products = [{text:"A", price: 120},{text:"B", price: 150}, {text:"C", price: 360}, {text:"D", price: 130}];
    return <div><Provider store={store}><Parent/></Provider></div>;
    }
  }
  
  
  export default App;
