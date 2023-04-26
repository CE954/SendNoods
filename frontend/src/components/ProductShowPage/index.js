import './index.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProduct, fetchProduct } from '../../store/products';
import { getCartItem, updateCartItem, addCartItem} from '../../store/cartItems';
import { useHistory } from 'react-router-dom';
import { openCart } from '../NavBar/index';

const ProductShowPage = () => {
    const dispatch = useDispatch();
    const { productId } = useParams();
    const product = useSelector(getProduct(productId));
    const cartItem = useSelector(getCartItem(productId));
    const [quantity, setQuantity] = useState(1);
    const user = useSelector(state => state.session.user);
    const history = useHistory();

    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        if (user) dispatch(getCartItem(productId));
    }, [dispatch, cartItem])

    
    useEffect(() => {
        dispatch(fetchProduct(productId))
    }, [dispatch, productId])
    
    if (!product) return null;
    
    const { photoUrl, name, description, price } = product;
    
    const updateQuantity = () => {
        let num = parseInt(document.getElementById('quant-input').value);
        if (num > 0) {
            setQuantity(num);
        } else {
            setQuantity(1);
        }
    }

    const addToCart = (e) => {
        if (!user) return history.push('/login');
        const userId = user.id;
        e.preventDefault();
        openCart();

        if (!cartItem) {
            const newCartItem = {
                cartItem: {
                    userId,
                    productId: productId,
                    quantity: quantity,
                }
            }
            return dispatch(addCartItem(newCartItem));
        } else if (cartItem) {
            const updatedCartItem = {
                cartItem: {
                    id: cartItem.id,
                    userId,
                    productId,
                    quantity: cartItem.quantity + quantity,
                }
            }
            return dispatch(updateCartItem(updatedCartItem));
        }
    }

    return (
        <>
            <div className='product-show-container'> 
                <div id='product-show-image'>
                    <img src={ photoUrl } alt= 'product-picture'/>
                </div>
                <div id='product-show-info'>
                    <div id='product-show-name'>{ name }</div>
                    <div id='product-show-desc'>{ description }</div>
                    <div id='product-show-price'>${ (Math.round(price * 100) / 100).toFixed(2) }</div>
                </div>
                <div className='product-show-quantity'>
                    <div id='product-show-quantity-label'>Select Quantity</div>
                    <div id='product-show-quantity-input'>
                        <button onClick={() => parseInt(quantity) > 1 ? setQuantity(parseInt(quantity) - 1) : setQuantity(1)}>-</button>
                        <input type='text' id='quant-input' value={quantity} onChange={updateQuantity} />
                        <button onClick={() => setQuantity(parseInt(quantity) + 1)}>+</button>
                    </div>
                </div>
                <button id='add-to-cart' onClick={addToCart}>ADD TO CART</button>
            </div>
        </>
    )
}

export default ProductShowPage;