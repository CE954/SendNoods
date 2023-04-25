import './index.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../store/products';

const ProductShowPage = () => {
    const dispatch = useDispatch();
    const { productId } = useParams();
    const product = useSelector(getProduct(productId));

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        dispatch(getProduct(productId))
    }, [dispatch, productId])

    const { name, description, price, photoUrl } = product;

    return (
        <>
            <div className='product-show-container'> 
                <div id='product-show-image'>
                    <img src={ photoUrl } alt={ name } />
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