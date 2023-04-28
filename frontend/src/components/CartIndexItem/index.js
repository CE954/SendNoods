import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { deleteCartItem, fetchCartItems, updateCartItem } from '../../store/cartItems';
import { GrFormClose } from 'react-icons/gr';
import { fetchProduct, getProduct } from '../../store/products';
import { useHistory } from 'react-router-dom';


const CartIndexItem = ({ cartItem }) => {
    const dispatch = useDispatch();
    const { id, productId, quantity } = cartItem;
    const product = useSelector(getProduct(cartItem.productId));
    const user = useSelector(state => state.session.user);
    const [removed, setRemoved] = useState(false);
    const history = useHistory();
    
    useEffect(() => {
        if (user) {
            dispatch(fetchCartItems());
            dispatch(fetchProduct(productId));
        }
    }, [removed, user]);
    
    if (!user) return history.push('/login');
    if (!product) return null;

    const { name, price, photoUrl } = product;

    const deleteItem = (e) => {
        dispatch(deleteCartItem(id, productId));
        setRemoved(true);
    }
    
    const handleIncrease = () => {
        const userId = user.id;
        const updatedCartItem = {
            cartItem: {
                id,
                userId,
                productId,
                quantity: parseInt(quantity + 1),
            }
        }
        return dispatch(updateCartItem(updatedCartItem));
    }

    const handleDecrease = () => {
        if (parseInt(quantity - 1) === 0) return deleteItem();
        const userId = user.id;
        const updatedCartItem = {
            cartItem: {
                id,
                userId,
                productId,
                quantity: parseInt(quantity - 1),
            }
        }
        return dispatch(updateCartItem(updatedCartItem));
    }


    return (
        <>
            <div className='cart-item'>
                <img id='cart-item-photo' src={photoUrl} alt='product'/>
                <div className='cart-item-info'>
                    <div className='cart-item-header'>
                        <GrFormClose id='remove-cart-item' onClick={deleteItem}/>
                        <div className='cart-item-name'>{name}</div>
                    </div>
                    <div className='cart-item-total'>
                        <div className='item-quantity'>Quantity: {quantity}</div>
                        <div className='item-subtotal'>${(Math.round((quantity * price) * 100) / 100).toFixed(2)}</div>
                    </div>
                    <div className='cart-item-quantity'>
                        <button onClick={handleDecrease}>-</button>
                        <input type='number' value={quantity} readOnly/>
                        <button onClick={handleIncrease}>+</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartIndexItem;