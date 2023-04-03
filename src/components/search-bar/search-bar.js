import './search-bar.css';

export default function SearchBar({position}) {
    const className = 'search-bar ' + position;
    return (
        <div className={className}>
            <input type="search" placeholder='search...' />
        </div>
    )
}