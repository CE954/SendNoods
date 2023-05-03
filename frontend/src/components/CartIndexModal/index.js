import './index.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getCartItems, fetchCartItems, deleteCartItem } from '../../store/cartItems';
import { GrFormClose } from 'react-icons/gr';
import CartIndexItem from '../CartIndexItem';
import noodles from '../../assets/smoky-noods.jpg';
import { fetchProducts } from '../../store/products';

const CartMenu = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const cartItems = useSelector(getCartItems);
    const user = useSelector(state => state.session.user);

    const closeCart = () => {
        const cartMenu = document.getElementById('cart-menu');
        cartMenu.style.translate = '100%';
        const cartBackground = document.getElementById('cart-background');
        cartBackground.style.display = 'none';
    }

    const cartSubTotal = () => {
        let total = 0;
        cartItems.forEach(cartItem => {
            total += cartItem.quantity * cartItem.price;
        })
        return total;
    }

    useEffect(() => {
        if (user) {
            dispatch(fetchCartItems());
        }
    }, [cartItems.length, user]);

    const cartItemMap = () => {
        if (cartItems.length === 0) {
            return 'YOUR CART IS EMPTY';
        } else {
            return cartItems.map(cartItem => (
                <CartIndexItem key={cartItem.id} cartItem={cartItem}/>
            ))
        }
    }

    const handleLogin = () => {
        closeCart();
        history.push('/login');
    }

    const handleCheckOut = () => {
        closeCart();
        cartItems.forEach(cartItem => {
            dispatch(deleteCartItem(cartItem.id, cartItem.productId));
        })
        const modal = document.getElementById('checkout-modal');
        const modalBackground = document.getElementById('modal-background');
        modal.style.display = 'block';
        modalBackground.style.display = 'block';
        history.push('/');
    }

    const handleModalClose = () => {
        const modal = document.getElementById('checkout-modal');
        const modalBackground = document.getElementById('modal-background');
        modal.style.display = 'none';
        modalBackground.style.display = 'none';
    }

    return (
        <>
        <div id='cart-menu'>
            <div id='cart-menu-header'>CART</div>
            <GrFormClose id='close-cart' onClick={closeCart}/> 
            { user ? 
                <div id='cart-menu-items'>
                    {cartItemMap()}
                </div> : 
                <>
                <img id='cart-noodles' src={noodles} alt='noodles'/>
                <button id='cart-login' onClick={handleLogin}>LOGIN TO SHOP</button>
                </>
            }
            { user && cartItems.length > 0 ? 
            <>
            <div id='cart-menu-subtotal'>SUBTOTAL:
                <div id='subtotal-num'>${(Math.round((cartSubTotal()) * 100) / 100).toFixed(2)}</div>
            </div>
            <button id='cart-menu-checkout' onClick={handleCheckOut}>CHECKOUT</button>
            </>
            : null
            }
        </div>
        <div id='checkout-modal'>
            <GrFormClose onClick={handleModalClose} id='close-modal'/>
            <h1 id='modal-header'>PEACE, LOVE AND NOODLES</h1>
            <p>Thank you for your purchase! We hope our noods put a big smile on your face</p>
        </div>
        <div id='cart-background'/>
        <div id='modal-background'/>
        </>
    )
}

export default CartMenu;
