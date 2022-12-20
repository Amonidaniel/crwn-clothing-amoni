import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assests/crown.svg'; 
import './navigation.styles.scss'
import { UserContext } from '../../component/context/user.context';
import { CartContext } from '../../component/context/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../component/cart-icon/cart-icon.component';
import CartDropdown from '../../component/cart-dropdown/cart-dropdown.component';



const NavigationBar = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
    

   return (
    <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <CrwnLogo className='logo' />
            </Link>
           <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
               {
                currentUser ? (
                    <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
                ) : (<Link className='nav-link' to='/auth'>
                SIGN IN
            </Link>)
               }
               <CartIcon />
           </div>
           {isCartOpen && <CartDropdown />}
        </div>
        <Outlet />
     </Fragment>

   );
};

export default NavigationBar