import './index.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProduct, fetchProduct } from '../../store/products';

const ProductShowPage = () => {
    const dispatch = useDispatch();
    const { productId } = useParams();
    const product = useSelector(getProduct(productId));
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        dispatch(fetchProduct(productId))
    }, [dispatch, productId])
    
    if (!product) return null;
    
    const { photoUrl, name, description, price } = product;
    
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
            </div>
        </>
    )
}

export default ProductShowPage;