import React from 'react';
import { connect } from 'react-redux';
//import Child from './Child.jsx';
import ParentStyle from './ItemContainer.scss';
import store from '../redux/store.jsx';
import {addProduct,addCart, filterProductsBy} from '../redux/actions.js';
import Cart from './Cart.jsx';
import fontAwesome from 'font-awesome/scss/font-awesome.scss';
import masonry from './masonry.scss';


class ItemContainer extends React.Component {
  constructor(props) {
    super(props);
    //const {data} = props;
    this.displayName = 'ItemContainer';
    this.state= {total: 0, _filterBy: ''};
  }
  addTotal(price){
    this.setState({total: this.state.total + price});
  }
  changeFilter(e, filter){
    this.props.dispatch(filterProductsBy(filter));
  }
  filterProducts() {
    console.log(this.props.activeFilter);
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
    console.log('/');
    console.log(this.props.reduxState);
    console.log('//');

    products = products.map((e, index) => {
      return <Item key={index} id={e.id} price={e.price} addTotal={e=>this.addTotal(e)} images={e.images}>{e.text}</Item>;
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

class Filter extends React.Component {
    render() {
        return <ul className="filter-list">
      <li className={this.props.activeFilter == 'all'?'active':''}><a href="#" onClick={e=>this.props.onSelect(e,'all')}>All</a></li>
      <li className={this.props.activeFilter == 'shoe'?'active':''} ><a href="#" onClick={e=>this.props.onSelect(e,'shoe')}>Shoes</a></li>
      <li className={this.props.activeFilter == 'shirt'?'active':''} ><a href="#" onClick={e=>this.props.onSelect(e,'shirt')}>Shirts</a></li>
      <li className={this.props.activeFilter == 'jacket'?'active':''} ><a href="#" onClick={e=>this.props.onSelect(e,'jacket')}>Jackets</a></li>
    </ul>;
    }
}

class Item extends React.Component {
  constructor(props) {
      super(props);

      this.displayName = 'Item';
      this.state={liked: false, activeColorID:0};
  }

  handleClick(e) {
    
    store.dispatch(addCart({id:this.props.id,price:this.props.price, text:this.props.children}));
    //this.props.addTotal( liked? this.props.price : -this.props.price );
  }
  selectColor(e, index){
    this.setState({activeColorID:index});
  }
  handleLike(e){
    var liked = !this.state.liked;      
    this.setState({liked: liked});
  }
  render() {

      return (<div className="product">
                <div className="product__info">
                  <div className="img">                    
                    <img src={'dist/products/product'+this.props.id+'/'+this.props.images[this.state.activeColorID]}/>
                  </div>
                  
                  <ul className="product__colors">
                  {this.props.images.map((image,index)=>{
                    return <li key={index} className={this.state.activeColorID==index?'active':''} onClick={(e)=>this.selectColor(e,index)}><img src={'dist/products/product'+this.props.id+'/'+image}/></li>
                  })}
                  </ul>
                    <a className="action-a" onClick={e=>this.handleClick(e)}>
                      <i className="fa fa-cart-plus" aria-hidden="true"></i>
                      
                    </a>
                </div>
                <div className="product__meta">
                <h3 className="product__title">{this.props.children}</h3>      
                <span className="product__price">${this.props.price.toFixed(2)}</span>
                </div>
                <i className={"fa fa-heart like "+ (this.state.liked?'active':'')} onClick={e=>this.handleLike(e)}/>
              </div>              
      );
  }
}

export default ItemContainer;

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

const ConnectedParent = connect(mapStateToProps)(ItemContainer)

export default ConnectedParent