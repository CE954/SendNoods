import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { deleteCartItem, fetchCartItems, updateCartItem } from '../../store/cartItems';
import { GrFormClose } from 'react-icons/gr';
import { fetchProduct, getProduct } from '../../store/products';
import { useHistory } from 'react-router-dom';


const CartIndexItem = ({ cartItem, setSubTotal }) => {
    const dispatch = useDispatch();
    const { id, productId, quantity } = cartItem;
    const product = useSelector(getProduct(cartItem.productId));
    const [amount, setAmount] = useState(quantity);
    const user = useSelector(state => state.session.user);
    const [removed, setRemoved] = useState(false);
    const history = useHistory();

    
    useEffect(() => {
        if (user) {
            dispatch(fetchCartItems());
            dispatch(fetchProduct(productId));
        }
    }, [removed]);
    
    if (!user) return history.push('/login');
    if (!product) return null;

    const { name, price, photoUrl } = product;

    const updateItem = (e) => {
        const userId = user.id;
        const newCartItem = {
            id,
            productId,
            quantity: amount,
            userId 
        }
        dispatch(updateCartItem(newCartItem));
    }

    const deleteItem = (e) => {
        e.preventDefault();
        dispatch(deleteCartItem(id, productId));
        setRemoved(true);
    }
    
    setSubTotal((price * amount));

    return (
        <>
            <div className='cart-item'>
                <img id='cart-item-photo' src={photoUrl} alt='product'/>
                <div className='cart-item-info'>
                    <GrFormClose id='remove-cart-item' onClick={deleteItem}/>
                    <div className='cart-item-name'>{name}</div>
                    <div className='cart-item-price'>${(Math.round((price) * 100) / 100).toFixed(2)}</div>
                    <div className='cart-item-total'>
                        <div className='item-quantity'>Amount: {quantity}</div>
                        <div className='item-subtotal'>Subtotal: ${(Math.round((price * quantity) * 100) / 100).toFixed(2)}</div>
                    </div>
                    <div className='cart-item-quantity'>
                        <button onClick={() => {parseInt(amount) < 1 ? setAmount(parseInt(amount) - 1) : deleteItem() ; updateItem()}}>-</button>
                        <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} />
                        <button onClick={()=> {setAmount(parseInt(amount) + 1); updateItem()}}>+</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartIndexItem;