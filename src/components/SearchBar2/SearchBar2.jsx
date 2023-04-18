import { useState } from 'react';

import './search-bar2.scss';


export default function SearchBar2({searchValue, handleSearchChange}) {
    console.log('searchValue>>>', searchValue);

    const [search, setSearch] = useState(searchValue);
    console.log('Value>>>', search);

    const onChange = (event) => {
        const value = event.target.value;
        setSearch(value);
        handleSearchChange(value);
    }
    
    
    return (
        <div className='search-bar-search'>
            <input
                value={search}
                type="search" 
                placeholder='Filter by name...' 
                onChange={onChange} />
        </div>
    )
}