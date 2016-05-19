import React from 'react';
import { connect } from 'react-redux';
import Child from './Child.jsx';
import ParentStyle from './Parent.scss';
import store from '../redux/store.jsx';
import {addProduct,addCart} from '../redux/actions.jsx';
import Cart from './Cart.jsx';
import fontAwesome from 'font-awesome/scss/font-awesome.scss';


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
        {/*
          <div className="total"><div className="ib ib--hl">Total</div><div className="ib ib--hr">${this.state.total.toFixed(2)}</div></div>
          */}
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
    
    store.dispatch(addCart({id:this.props.id,price:this.props.price, text:this.props.children}));
    this.props.addTotal( active? this.props.price : -this.props.price );
  }
  handleLike(e){
    var active = !this.state.active;      
    this.setState({active: active});
  }
  render() {
      return <div className="col-lg-3 col-md-4">
              <div className="product">
                <div className="product__info">
                  <div className="fa fa-glass img"></div>
                  <h3 className="product__title">{this.props.children}</h3>      
                  <div className="product__price">${this.props.price.toFixed(2)}</div>
                    <a className="action-a" onClick={e=>this.handleClick(e)}>
                      <i className="fa fa-cart-plus" aria-hidden="true"></i>
                      <span>Add to cart</span>
                    </a>
                </div>
                <i className={"fa fa-heart like "+ (this.state.active?'active':'')} onClick={e=>this.handleLike(e)}/>
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