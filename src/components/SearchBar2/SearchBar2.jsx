import { useState } from 'react';

import { debonce } from '../../Utils';

import './search-bar2.scss';


export default function SearchBar2({searchValue, setSearchName}) {
    console.log('searchValue>>>', searchValue);

    const [search, setSearch] = useState(searchValue);
    console.log('Value>>>', search);

    const onChange = (event) => {
        const value = event.target.value;
        
        setSearch(value);

        setSearchName(value);
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