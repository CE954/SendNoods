import './index.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getCartItems, fetchCartItems, deleteCartItem } from '../../store/cartItems';
import { GrFormClose } from 'react-icons/gr';
import CartIndexItem from '../CartIndexItem';

const CartMenu = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const cartItems = useSelector(getCartItems);
    const [subTotal, setSubTotal] = useState(0);
    const user = useSelector(state => state.session.user);

    const closeCart = () => {
        const cartMenu = document.getElementById('cart-menu');
        cartMenu.style.translate = '100%';
    }

    useEffect(() => {
        if (user) {
            dispatch(fetchCartItems());
        }
    }, [cartItems.length]);

    const cartItemMap = () => {
        if (cartItems.length === 0) {
            return 'YOUR CART IS EMPTY';
        } else {
            return cartItems.map(cartItem => {
                <CartIndexItem key={cartItem.id} cartItem={cartItem} setSubTotal={setSubTotal} />
            })
        }
    }

    return (
        <div id='cart-menu'>
            <div id='cart-menu-header'>CART</div>
            <GrFormClose id='close-cart' onClick={closeCart}/> 
            <div id='cart-menu-items'>
                {cartItemMap()}
            </div>
        </div>
    )
}

export default CartMenu;
