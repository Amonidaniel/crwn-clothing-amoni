import { useContext } from 'react';

import { CartContext } from '../context/cart.context';

import { Link } from 'react-router-dom';

import './cart-dropdown.styles.scss'
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => ( 
                    <CartItem key={item.id} item={item} />))}
            </div>
            <Link to='/checkout'>
            <Button>GO TO CHECKOUT</Button>
            </Link>

        </div>
    );
};

export default CartDropdown;