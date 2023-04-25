import './index.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, getProducts } from '../../store/products';
import ProductIndexItem from '../ProductIndexItem/index';

const ProductIndexPage = () => {
    const dispatch = useDispatch();
    const products = useSelector(getProducts);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const displayProducts = () => products.map((product) => (
        <ProductIndexItem key={product.id} product={product}/>
    ))

    return (
        <> 
            <div id='product-anim'>
                <div id='product-anim-text'>
                #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~
                </div>
            </div>
                <h1 id='product-header'>ALL PRODUCTS</h1>
            <div id='product-listings'>
                {displayProducts()}
            </div>
        </>
    )

}

export default ProductIndexPage;