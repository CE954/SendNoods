import './index.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/BigLogo.png'
import { useSelector } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { GoThreeBars } from 'react-icons/go';

const NavBar = () => {
    const sessionUser = useSelector(state => state.session.user);

    return (
        <div id='nav-bar'>
            <div id='hamburger'> 
                <GoThreeBars/>
            </div>
            <div id='nav-bar-left'>
                <NavLink to='/' exact={true}>
                    <img id='logo' src={logo} alt='logo'/>     
                </NavLink>
            </div>
            <div id='nav-bar-right'>
                <NavLink to='/products'>SHOP NOW</NavLink>
                <NavLink to='/about'>OUR STORY</NavLink>
                {sessionUser ? 
                    <NavLink to='/account'><FaUser/></NavLink> :
                    <NavLink to='/login'><FaUser/></NavLink>
                }
                <div id='cart'> 
                    <FaShoppingCart/>
                </div>
            </div>
        </div>
    )
}

export default NavBar;