import './index.scss';
import { Link } from 'react-router-dom';

const ProductIndexItem = ({ product }) => {
    const { name, description, price, photoUrl } = product;

    return (
        <div className="product-listing">
            <Link to={`/products/${product.id}`} className='product-photo'>
                <img src={photoUrl} alt={name} />
            </Link>
            <div className='product-info'>
                <div id='product-name'>{name}</div>
                <div id='product-price'>${(Math.round(price * 100) / 100).toFixed(2)}</div>
            </div>
        </div>
    )
}

export default ProductIndexItem;