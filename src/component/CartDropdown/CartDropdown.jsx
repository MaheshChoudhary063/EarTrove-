import React from "react";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { useNavigate } from 'react-router-dom';
import CustomButton from '../CustomButton/CustomButton'
import CartItem from "../CartItem/CartItem";
import './CartDropdown.scss'
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
const CartDropdown = ({cartItems,dispatch}) =>{
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/checkout');
        dispatch(toggleCartHidden());
    }

    return(
    <div className="cart-dropdown">
        <div className="cart-items">
            { cartItems.length ?(
                cartItems.map(cartItem=>(<CartItem key={cartItem.id} item={cartItem}/>))
            ):(<span className="empty-message">Your Cart is empty</span>)
            }
        </div>
        {/* <CustomButton onClick={() => navigate('/checkout');
        dispatch(toggleCartHidden());
        }>Go TO CHECKOUT</CustomButton> */}
        <CustomButton onClick={handleCheckout}>Go to CHeckout</CustomButton>
    </div>
    )
}
const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems
})
export default connect(mapStateToProps)(CartDropdown);