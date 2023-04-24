import './index.scss';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/BigLogo.png'
import { useSelector } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { GoThreeBars } from 'react-icons/go';
import { GrFormClose } from 'react-icons/gr';

const NavBar = () => {
    const sessionUser = useSelector(state => state.session.user);
    const location = useLocation();

    const navColor = () => {
        if (location.pathname === '/') {
            return 'orange';
        } else if (location.pathname === '/login') {
            return 'white';
        } else if (location.pathname === '/signup') {
            return 'white';
        } else if (location.pathname === '/account') {
            return 'white';
        }
    }

    const toggleSideMenu = () => {
        const sideNav = document.querySelector('.side-nav');
        sideNav.classList.toggle('active');
    }

    return (
        <div id='nav-bar' className={navColor()}>
            <div className='hamburger'> 
                <GoThreeBars id='burger-icon' onClick={toggleSideMenu}/>
                <div className='side-nav'>
                    <GrFormClose id='close-icon' onClick={toggleSideMenu}/>
                    <NavLink to='/products' onClick={toggleSideMenu}>SHOP NOW</NavLink>
                    <NavLink to='/about' onClick={toggleSideMenu}>OUR STORY</NavLink>
                    {sessionUser ?
                        <NavLink to='/account' onClick={toggleSideMenu}>ACCOUNT</NavLink> :
                        <NavLink to='/login' onClick={toggleSideMenu}>ACCOUNT</NavLink>
                    }
                    <a href="https://www.linkedin.com/in/christian-espinosa-bb0b47187" target="_blank">
                        LINKEDIN
                    </a>
                    <a href='https://github.com/CE954/SendNoods' target='_blank'>
                        GITHUB
                    </a>
                </div>
            </div>
            <div id='nav-bar-left'>
                <NavLink to='/' exact={true}>
                    <img id='logo' src={logo} alt='logo'/>     
                </NavLink>
            </div>
            <div id='nav-bar-right'>
                <NavLink to='/products'>SHOP NOW</NavLink>
                <NavLink to='/about'>OUR STORY</NavLink>
                <div id='search'>
                    <FaSearch/>
                </div>
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