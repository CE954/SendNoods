import './index.scss';
import ProductIndexItem from '../ProductIndexItem';
import { useSelector } from 'react-redux';
import { getProducts } from '../../store/products';

const SearchPage = () => {
    const products = useSelector(getProducts);

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
        <div className='search-page'>
            <h1 id='search-title'>SEARCH RESULTS</h1>
            <div className='search-items'>
                {searchItems}
            </div>
        </div>
    )
}

export default SearchPage;