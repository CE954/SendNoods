import './index.scss';
import { FaSearch } from 'react-icons/fa';
import { GrFormClose } from 'react-icons/gr';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchProducts } from '../../store/products';
import { useState } from 'react';

const SearchBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [query, setQuery] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(searchProducts(query));
        history.push('/search');
        setQuery('');
        toggleSearch();
    }

    const toggleSearch = () => {
        const searchBar = document.querySelector('.search-bar');
        const searchInput = document.getElementById('search-input');
        const rightNav = document.getElementById('nav-bar-right');
        rightNav.classList.toggle('expand-nav')
        searchBar.classList.toggle('show-search')
        setTimeout(() => searchInput.focus(), 500);
    }

    return (
        <form className='search-bar' onSubmit={handleSubmit}>
            <input type='search' placeholder='Search' id='search-input' 
                onChange={e => setQuery(e.target.value)}
                value={query}
            />
            <div id='search-icon' onClick={toggleSearch}>
                <FaSearch id='search-i'/>
                <GrFormClose id='close-i'/>
            </div>
        </form>
    )

}

export default SearchBar;