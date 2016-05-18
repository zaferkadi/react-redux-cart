import React from 'react';
import { connect } from 'react-redux';
import Child from './Child.jsx';

import ParentStyle from './Parent.scss';
import store from '../redux/store.jsx';
import {addProduct,addCart} from '../redux/actions.jsx';
import Cart from './Cart.jsx';
class Parent extends React.Component {
  constructor(props) {
    super(props);
    //const {data} = props;
    this.displayName = 'Parent';
    this.state= {total: 0, filter: ''};
  }
  componentWillMount() {    
    //this.state.products =store.getState().products;
    //this.props.dispatch(addProduct({text: 'A', price: 110}));
  }
  addTotal(price){
    this.setState({total: this.state.total + price});
  }
  onValueChange(e){
    var value = e.target.value;
    this.setState({filter: value});
  }

  render() {
    
    var products = this.props.products;
    // var filter = this.state.filter.trim().toLowerCase();
    
    // if(filter.length > 0) {
    //   products = products.filter((e, index)=>{
    //     return e.text.toLowerCase().match(filter);
    //   });
    // }
    //console.log(products);
    products = products.map((e, index) => {
      return <Item key={index} id={e.id} price={e.price} addTotal={e=>this.addTotal(e)}>{e.text}</Item>;
    });

    return (
        <div>
          <h1>Products</h1>          
          <div className="row"> {products}</div> 
          <div className="total"><div className="ib ib--hl">Total</div><div className="ib ib--hr">${this.state.total.toFixed(2)}</div></div>
          <div><Cart/></div>
        </div>);
  }
}

class Item extends React.Component {
  constructor(props) {
      super(props);

      this.displayName = 'Item';
      this.state={active: false};
  }

  handleClick(e) {
    
    var active = !this.state.active;      
    this.setState({active: active});

    store.dispatch(addCart({id:this.props.id,price:this.props.price, text:this.props.children}));
    this.props.addTotal( active? this.props.price : -this.props.price );
  }

  render() {
      return <div className={" col-lg-3 "+(this.state.active?'active':'')}>
      <div className="item x">
      <h3>{this.props.children}</h3>
      <p>${this.props.price.toFixed(2)}</p>
      <button onClick={e=>this.handleClick(e)}>Add to cart</button>
      </div>
      </div>;
  }
}

export default Parent;

// This is our select function that will extract from the state the data slice we want to expose
// through props to our component.
const mapStateToProps = (state/*, props*/) => {
  return {
    products: state.products,
    // It is very bad practice to provide the full state like that (reduxState: state) and it is only done here
    // for you to see its stringified version in our page. More about that here:
    // https://github.com/rackt/react-redux/blob/v4.0.0/docs/api.md#inject-dispatch-and-every-field-in-the-global-state
    reduxState: state,
  }
}

const ConnectedParent = connect(mapStateToProps)(Parent)

export default ConnectedParent