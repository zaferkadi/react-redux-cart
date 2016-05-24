import React from 'react';
import { connect } from 'react-redux';
//import Child from './Child.jsx';
import ParentStyle from './ProductContainer.scss';
import store from '../redux/store.jsx';
import {addProduct,addCart, filterProductsBy} from '../redux/actions.js';
import Cart from './Cart.jsx';
import fontAwesome from 'font-awesome/scss/font-awesome.scss';
import masonry from './masonry.scss';
import Item from './Product.jsx';
import Filter from './Filter.jsx';

class ProductContainer extends React.Component {
  constructor(props) {
    super(props);
    //const {data} = props;
    this.displayName = 'ProductContainer';
    this.state= {total: 0, _filterBy: ''};
  }
  addTotal(price){
    this.setState({total: this.state.total + price});
  }
  changeFilter(e, filter){
    this.props.dispatch(filterProductsBy(filter));
  }

  addToCart(e, productID){
    let product = this.props.products.filter(product=>{
       return product.id==productID;
    });
    
    this.props.dispatch(addCart(Object.assign({}, product[0])));
  }

  filterProducts() {
    //console.log(this.props.activeFilter);
    switch(this.props.activeFilter) {
      case 'all':
        return this.props.products;
      default:
        let products =  this.props.products.filter((e, index)=>{
          return e.type.toLowerCase().match(this.props.activeFilter);
        });
        return products;
    }
  }
  render() {

    var products = this.filterProducts();//this.props.products;
    
    // console.log('/');
    // console.log(this.props.reduxState);
    // console.log('//');

    products = products.map((item, index) => {
      return <Item onClick={(e, productID)=>this.addToCart(e, productID)} {...item} key={index} addTotal={e=>this.addTotal(e)}/>;
    });

    return (
        <div>
          <h1>Products</h1>
          <Filter onSelect={(e,v)=>this.changeFilter(e,v)} activeFilter={this.props.activeFilter}/>
          <div className="rowX products"> {products}</div>
        {/*
          <div className="total"><div className="ib ib--hl">Total</div><div className="ib ib--hr">${this.state.total.toFixed(2)}</div></div>
          */}
          <Cart/>
          
        </div>);
  }
}

export default ProductContainer;

// This is our select function that will extract from the state the data slice we want to expose
// through props to our component.
const mapStateToProps = (state/*, props*/) => {
  return {
    products: state.products,
    activeFilter: state.activeFilter,
    // It is very bad practice to provide the full state like that (reduxState: state) and it is only done here
    // for you to see its stringified version in our page. More about that here:
    // https://github.com/rackt/react-redux/blob/v4.0.0/docs/api.md#inject-dispatch-and-every-field-in-the-global-state
    reduxState: state,
  }
}

const ConnectedParent = connect(mapStateToProps)(ProductContainer)

export default ConnectedParent