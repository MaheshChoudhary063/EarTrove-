import React from 'react'
import { createStructuredSelector } from "reselect";
import {connect} from 'react-redux'
import { selectCartItems,selectCartTotal } from '../../redux/cart/cart.selectors'
import './Checkout.scss'
import CheckOutItem from '../CheckoutItem/CheckoutItem';

const Checkout = ({cartItems,total}) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>

        <div className='header-block'>
          <span>Description</span>
        </div>

        <div className='header-block'>
          <span>Quantity</span>
        </div>

        <div className='header-block'>
          <span>Price</span>
        </div>

        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
      <CheckOutItem key={cartItem.id} cartItem={cartItem} />
    ))}
      <div className='total'>
        TOTAL: ${total}
      </div>
    </div>
  )
}
const mapStateToProps=createStructuredSelector({
  cartItems:selectCartItems,
  total:selectCartTotal
})

export default connect(mapStateToProps)(Checkout)