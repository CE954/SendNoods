import './index.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, getProducts } from '../../store/products';
import ProductIndexItem from '../ProductIndexItem/index';
import Loader from "../Loader";
import { useState } from 'react';

const ProductIndexPage = () => {
    const dispatch = useDispatch();
    const products = useSelector(getProducts);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    useEffect(() => {
        dispatch(fetchProducts())
        .then(() => setIsLoading(false));
    }, [dispatch]);

    const displayProducts = () => products.map((product) => (
        <ProductIndexItem key={product.id} product={product}/>
    ))

    return (
        <> 
            {isLoading && <Loader />}
            <div id='product-anim'>
                <div id='product-slider'>
                    <p>
                        #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~
                    </p>
                    <p>
                        #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~
                    </p>
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