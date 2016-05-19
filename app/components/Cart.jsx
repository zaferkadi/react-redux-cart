import React,{PropTypes} from 'react';
import { connect } from 'react-redux';
import {removeCart} from '../redux/actions.jsx';
import style from './Cart.scss';
import store from '../redux/store.jsx';
import fontAwesome from 'font-awesome/scss/font-awesome.scss';
class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Cart';
    }
    deleteItemFromCart(e,id){    	
    	this.props.dispatch(removeCart(id));
    }
    render() {
    	var items = this.props.cart

		let totalPrices = items.map(item=>{
    		return parseInt(item.price);
    	}).reduce((a,b)=>a+b);

    	items = items.map((e, index)=>{
    		return <Item onClick={(e, id)=>this.deleteItemFromCart(e, id)} key={index} text={e.text} price={e.price} id={e.id}></Item>
    	});

        return <div id="cart" className="panel panel-default">
        	<div className="panel-heading">
        		<h3>Cart <span>{items.size?items.size+' items':'is empty'}</span></h3>
        	</div>
        	<div className="panel-body">
        		<table>
        			<thead style={items.size?{}:{display:'none'}}><tr><th>Order</th><th>Price</th></tr></thead>
        			<tbody>{items}</tbody>
        			<tfoot>
        				<tr><td colSpan="2"><strong>{totalPrices?"$"+totalPrices.toFixed(2):""}</strong></td></tr>
        			</tfoot>
        		</table>
        	</div>
        </div>;
    }
}


class Item extends React.Component {
    render() {
        return <tr className="cart-item">
  <td><span>{this.props.text}</span></td>
  <td><strong>${this.props.price.toFixed(2)}</strong></td>
  <td><a href="#" onClick={(e,id)=>this.props.onClick(e, this.props.id)}><i className="fa fa-trash" aria-hidden="true"></i></a></td> 
  </tr>;
    }
}


// const Item = ({ onClick, price, text, id }) => (
//   <tr className="cart-item">
//   <td><span>{text}</span></td>
//   <td><strong>${price.toFixed(2)}</strong></td>
//   <td><a href="#" onClick={()=>onClick()}><i className="fa fa-trash" aria-hidden="true"></i></a></td> 
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