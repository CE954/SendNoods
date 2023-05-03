import './index.scss';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/BigLogo.png'
import { useSelector } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { GoThreeBars } from 'react-icons/go';
import { GrFormClose } from 'react-icons/gr';
import CartMenu from '../CartIndexModal';
import SearchBar from '../SearchBar';

export const openCart = () => {
    const cartMenu = document.querySelector('#cart-menu');
    cartMenu.style.translate = '0%';
    const cartBackground = document.getElementById('cart-background');
    cartBackground.style.display = 'block';
}

const NavBar = () => {
    const sessionUser = useSelector(state => state.session.user);
    const location = useLocation();

    const navColor = () => {
        switch (location.pathname) {
            case '/':
                return 'yellow';
            case '/login':
                return 'white';
            case '/signup':
                return 'white';
            case '/account':
                return 'white';
            case '/products':
                return 'white';
            default: 
                return 'white';
        }
    }

    const openSideMenu = () => {
        const sideNav = document.querySelector('.side-nav');
        sideNav.style.translate = '0%';
        const sideNavBackground = document.getElementById('side-nav-background');
        sideNavBackground.style.display = 'block';
    }

    const closeSideMenu = () => {
        const sideNav = document.querySelector('.side-nav');
        sideNav.style.translate = '-100%';
        const sideNavBackground = document.getElementById('side-nav-background');
        sideNavBackground.style.display = 'none';
    }

    return (
        <div id='nav-bar' className={navColor()}>
            <div id='side-nav-background'/>
            <div className='hamburger'> 
                <GoThreeBars id='burger-icon' onClick={openSideMenu}/>
                <div className='side-nav'>
                    <GrFormClose id='close-icon' onClick={closeSideMenu}/>
                    <NavLink to='/products' onClick={closeSideMenu}>SHOP NOW</NavLink>
                    <NavLink to='/about' onClick={closeSideMenu}>OUR STORY</NavLink>
                    {sessionUser ?
                        <NavLink to='/account' onClick={closeSideMenu}>ACCOUNT</NavLink> :
                        <NavLink to='/login' onClick={closeSideMenu}>ACCOUNT</NavLink>
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
                    {/* <FaSearch/> */}
                    <SearchBar/>
                </div>
                {sessionUser ? 
                    <NavLink to='/account' id='user-icon'><FaUser/></NavLink> :
                    <NavLink to='/login' id='user-icon'><FaUser/></NavLink>
                }
                <div id='cart' > 
                    <FaShoppingCart onClick={openCart} id='cart-icon'/>
                </div>
            </div>
            <CartMenu/>
        </div>
    )
}

export default NavBar;