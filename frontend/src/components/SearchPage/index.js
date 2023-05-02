import './index.scss';
import ProductIndexItem from '../ProductIndexItem';
import { useSelector } from 'react-redux';
import { getProducts } from '../../store/products';
import { useEffect } from 'react';

const SearchPage = () => {
    const products = useSelector(getProducts);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    let searchItems;
    if (products.length > 0) {
        searchItems = products.map(product => {
            return (
                <ProductIndexItem key={product.id} product={product} />
            )
        })
    } else {
        searchItems = <div className='no-results'>NO RESULTS FOUND</div>
    }

    return (
        <>
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
            <h1 id='search-title'>SEARCH RESULTS</h1>
        <div className='search-page'>
            <div className='search-items'>
                {searchItems}
            </div>
        </div>
        </>
    )
}

export default SearchPage;