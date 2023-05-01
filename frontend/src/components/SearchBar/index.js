import './index.scss';
import { FaSearch } from 'react-icons/fa';
import { GrFormClose } from 'react-icons/gr';

const SearchBar = () => {
    const toggleSearch = () => {
        const searchBar = document.querySelector('.search-bar');
        const searchInput = document.getElementById('search-input');
        const rightNav = document.getElementById('nav-bar-right');
        rightNav.classList.toggle('expand-nav')
        searchBar.classList.toggle('show-search')
        setTimeout(() => searchInput.focus(), 500);
    }


    return (
        <form className='search-bar'>
            <input type='search' placeholder='Search' id='search-input'/>
            <div id='search-icon' onClick={toggleSearch}>
                <FaSearch id='search-i'/>
                <GrFormClose id='close-i'/>
            </div>
        </form>
    )

}

export default SearchBar;