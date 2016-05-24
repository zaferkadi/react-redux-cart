import React from 'react';

const Item = ({ onClick, price, text, id }) => (
  <tr className="cart-item">
  <td><span>{text}</span></td>
  <td><strong>${price.toFixed(2)}</strong></td>
  <td><a href="#" onClick={(e)=>onClick(e,id)}><i className="fa fa-trash" aria-hidden="true"></i></a></td> 
  </tr>
)

export default Item;