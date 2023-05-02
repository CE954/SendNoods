import './index.scss';
import noods from '../../assets/spicy-noods.png';

const Loader = () => {
    return (
        <div className='loading-screen'>
            <img src={noods} alt='loading...'/>
            <p>LOADING...</p>
        </div>
    )
}

export default Loader;