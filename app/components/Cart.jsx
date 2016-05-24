import React,{PropTypes} from 'react';
import { connect } from 'react-redux';
import {removeCart} from '../redux/actions.js';
import style from './Cart.scss';
import store from '../redux/store.jsx';
import fontAwesome from 'font-awesome/scss/font-awesome.scss';
import Item from './CartItem.jsx';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Cart';
    }
    deleteItemFromCart(event,id){
    	this.props.dispatch(removeCart(id));
    }
    render() {
    	var items = this.props.cart

		var totalPrices =items.length? items.map(item=>{
    		return parseInt(item.price);
    	}).reduce((a,b)=>a+b):0;

    	items = items.map((item, index)=>{
    		return <Item onClick={(e, id)=>this.deleteItemFromCart(e, id)} key={index} {...item}  ></Item>
    	});

        return <div id="cart">
        <div className="notification">
            <i className="fa fa-cart-arrow-down" style={{fontSize:'2em'}} aria-hidden="true"></i>
            <span>{items.length}</span>
        </div>
        <div className="panel panel-default">
        	<div className="panel-heading">            
        	   <h3>Cart {items.length?items.length+' items':'is empty'}</h3>
        	</div>
        	<div className="panel-body">
        		<table>
        			<thead style={items.length?{}:{display:'none'}}><tr><th>Order</th><th>Price</th></tr></thead>
        			<tbody>{items}</tbody>
        			<tfoot>
        				<tr><td colSpan="2"><strong>{totalPrices?"$"+totalPrices.toFixed(2):""}</strong></td></tr>
        			</tfoot>
        		</table>
        	</div>
        </div></div>;
    }
}


// const Item = ({ onClick, price, text, id }) => (
//   <tr className="cart-item">
//   <td><span>{text}</span></td>
//   <td><strong>${price.toFixed(2)}</strong></td>
//   <td><a href="#" onClick={(e)=>onClick(e,id)}><i className="fa fa-trash" aria-hidden="true"></i></a></td> 
//   </tr>
// )

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