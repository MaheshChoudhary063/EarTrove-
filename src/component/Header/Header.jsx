import React from 'react'
import {  connect } from 'react-redux'
import {Link} from 'react-router-dom'
import Logo from '../../assests/Logo.png'
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selector'
import CartDropdown from '../CartDropdown/CartDropdown'
import './Header.scss'
import { auth } from '../../Firebase/FirebaseUtils'
import CartIcon from '../Carticon/Carticon'

const Header = ({currentUser,hidden}) => {
  
  return (
    <div className='header'>
        <Link className='logo-container' to='/'>
            
            <img src={Logo} alt='logo ' className='logo' height="40px" width="30px" />
        </Link>

        <div className='options'>
            <Link className='option' to='/shop' >Shop</Link>

            <Link className='option' to='/shop' >Contact</Link>

            {currentUser ? (
              <div className='option' onClick={() => auth.signOut()}>
                 Sign Out
              </div>
             ) : (
            <Link className='option' to='/signin'>
               Sign In
             </Link>
             )}
             <CartIcon/>
        </div> {
          hidden ? null: <CartDropdown/>
        }
        
    </div>
  )
}
const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectCartHidden
})

export default connect(mapStateToProps)(Header)