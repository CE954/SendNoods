import './index.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProduct, fetchProduct } from '../../store/products';
import { getCartItem, updateCartItem, addCartItem} from '../../store/cartItems';
import { useHistory } from 'react-router-dom';
import { openCart } from '../NavBar/index';
import ReviewsIndexSection from '../ReviewsIndexSection';
import check from '../../assets/check.png';

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
                    <div id='product-show-quantity-label'>Select Quantity</div>
                    <div className='product-show-quantity'>
                        <div id='product-show-quantity-input'>
                            <button onClick={() => parseInt(quantity) > 1 ? setQuantity(parseInt(quantity) - 1) : setQuantity(1)}>-</button>
                            <input type='text' id='quant-input' value={quantity} onChange={updateQuantity} />
                            <button onClick={() => setQuantity(parseInt(quantity) + 1)}>+</button>
                        </div>
                    </div>
                    <button id='add-to-cart' onClick={addToCart}>ADD TO CART</button>
                </div>
            </div>
            <ReviewsIndexSection />
            <div id='headlines-section'>
                <div id='headlines-title'>THE HEADLINES</div>
                <div className='moving-text'>
                    <svg className="text-path-1" viewBox="0 -20 425 300">
                        <path id="curve" d="M0,0C76.72,0,76.72,49.11,153.43,49.11S230.15,0,306.87,0,383.58,49.11,460.3,49.11,537,0,613.74,0" />
                        <text x="-500">
                            <textPath xlinkHref="#curve">
                                <animate attributeName="startOffset" dur="13s" values="-500;0" repeatCount="indefinite"></animate>
                                NOT A NORMAL NOODLE ~ NOT A NORMAL NOODLE ~ NOT A NORMAL NOODLE ~ NOT A NORMAL NOODLE ~ NOT A NORMAL NOODLE ~ NOT A NORMAL NOODLE ~ NOT A NORMAL NOODLE ~ NOT A NORMAL NOODLE ~
                            </textPath>
                        </text>
                    </svg>
                    <svg className='text-path-2' viewBox="440 235 120 30">
                        <path id="curve-2" d=" M 250, 500
                            a 250,250 0 1,1 500,0
                            a 250,250 0 1,1 -500,0" />
                        <text x="-500">
                            <textPath xlinkHref="#curve-2">
                                <animate attributeName="startOffset" dur="15s" values="-500;0" repeatCount="indefinite"></animate>
                                NOT A NORMAL NOODLE ~ NOT A NORMAL NOODLE ~ NOT A NORMAL NOODLE ~ NOT A NORMAL NOODLE ~ NOT A NORMAL NOODLE ~ NOT A NORMAL NOODLE ~ NOT A NORMAL NOODLE ~ NOT A NORMAL NOODLE ~
                            </textPath>
                        </text>
                    </svg>
                </div>
                <ul id='headlines-text'>
                    <li><img src={check}/> 100% VEGAN</li>
                    <li><img src={check}/> HIGH IN PROTEIN</li>
                    <li><img src={check}/> 26 VITAMINS & MINERALS</li>
                    <li><img src={check}/> NO PALM OIL</li>
                    <li><img src={check}/> FULLY RECYCLABLE</li>
                    <li><img src={check}/> NO GMO</li>
                    <li><img src={check}/> NO ARTIFICIAL FLAVORS</li>
                </ul>
            </div>
        </>
    )
}

export default ProductShowPage;