import React,{PropTypes} from 'react';
import { connect } from 'react-redux';
import {removeCart} from '../redux/actions.jsx';
import style from './Cart.scss';
import store from '../redux/store.jsx';
class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Cart';
        //this.state = {cart:[]};
        
  //       store.subscribe(()=> {
  //   		console.log('store_0 has been updated. Latest store state:', store.getState());
  //   		//this.state.cart = store.getState().cart;
  //   	// Update your views here
		// });
        //this.state.cart = {};
    }
    deleteItemFromCart(e,id){
    	// alert('hy');
    	//console.log(id);
    	this.props.dispatch(removeCart(id));
    }
    render() {
    	var items = this.props.cart
    	if(items.size == 0) {
    		//return <h3>No Data</h3>;
    	}
		let prices = items.map(item=>{
    		return parseInt(item.price);
    	});
    	let totalPrices = prices.reduce((a,b)=>a+b);
    	items = items.map((e, index)=>{
    		return <Item handleDelete={(e, id)=>this.deleteItemFromCart(e, id)} key={index} text={e.text} price={e.price} id={e.id}></Item>
    	})
        return <div id="cart" className="panel panel-default">
        <div className="panel-heading">
        <h3>Cart - {items.size}</h3>
        </div>
        <div className="panel-body">
        {items.size?items:<p>add</p>}
        Total {totalPrices}
        </div>
        </div>;
    }
}

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Item';
    }
    onDelete(e) {    	
    	this.props.handleDelete(e, this.props.id);
    }
    render() {
        return <li>
    		{this.props.id}: {this.props.text} - {this.props.price} <button onClick={(e)=>this.onDelete(e)}>Delete</button>
  			</li>;
    }
}


// const Item = ({ onClick, price, text, id }) => (
//   <li onClick={onClick} >
//     {id}: {text} - {price}
//   </li>
// )

// Item.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   price: PropTypes.number.isRequired,
//   text: PropTypes.string.isRequired
// }
export default Cart;

// This is our select function that will extract from the state the data slice we want to expose
// through props to our component.
const mapStateToProps = (state/*, props*/) => {
  return {
    cart: state.cart,
    // It is very bad practice to provide the full state like that (reduxState: state) and it is only done here
    // for you to see its stringified version in our page. More about that here:
    // https://github.com/rackt/react-redux/blob/v4.0.0/docs/api.md#inject-dispatch-and-every-field-in-the-global-state
    reduxState: state,
  }
}

const ConnectedCart = connect(mapStateToProps)(Cart)

export default ConnectedCart