import './index.scss';
import { NavLink } from 'react-router-dom';
import splashImg from '../../assets/splash-img.png';

const HomePage = () => {

    return (
        <>
            <div className='splash'>
                <div id='splash-text'>
                    <h1>
                        NUTRITIONALLY COMPLETE INSTANT NOODLES
                    </h1>
                    <div>
                        Plant-based instant noodles that are healthy for you and our planet.
                    </div>
                    <div id='check-it-out'>
                        <NavLink to='/products'>CHECK IT OUT</NavLink>
                    </div>
                </div>
                <div id='splash-img'>
                    <img src={splashImg} alt='splash-img' />
                </div>
            </div>
        </>
    )
}

export default HomePage;