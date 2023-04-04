import { debonce } from '../../Utils';

import './search-bar2.scss';


export default function SearchBar2({setSearchName}) {
    
    return (
        <div className='search-bar-search'>
            <input 
                type="search" 
                placeholder='Filter by name...' 
                onChange={debonce(setSearchName, 700)}/>
        </div>
    )
}