import { useState, useEffect } from "react";

import SearchBar2 from '../components/SearchBar2/SearchBar2';
import PhotoItem2 from '../components/PhotoItem2/PhotoItem2';
import Pagination from "../components/Pagination/Pagination";

import {getData, createFakeSkeletonData, debonce, sortData} from '../Utils';

import rmLogo from '../img/rick_morty_logo.png';

import './home-page.scss';


export default function HomePage() {
   
    const search = localStorage.getItem('searchValue') ? JSON.parse(localStorage.getItem('searchValue')) : '';

    const [characters, setCharacters] = useState(createFakeSkeletonData());
    const [searchName, setSearchName] = useState(search);
    const [page, setPage] = useState(37);
    const [limit, setLimit] = useState(20);
    const [totalPages, setTotalPages] = useState(null);

    console.log('totalPages>>>', totalPages);
    /**лимит 20 віддає АПИ https://rickandmortyapi.com/. Для функционала з полем Select, та вибором іншого значення
     * лимита треба використовувати setLimit в цьому хуці
    */

    const handlePageChange = (value) => {

        console.log('value>>>', value);
        
        if(!isNaN(value)) return setPage(value);
        if (value === '&laquo;') setPage(1);
        if (value === '&lsaquo;' && page !== 1) setPage(page - 1);
        if (value === '&raquo;') setPage(totalPages);
        if (value === '&rsaquo;' && page !== totalPages) setPage(page + 1);

       

        // (value === '&laquo;') 
        //     ? setPage(1) 
        //     : (value === '&lsaquo;' && page !== 1) 
        //         ? setPage(page - 1) 
        //         : (value === '&raquo;') 
        //             ? setPage(totalPages) 
        //             : (value === '&rsaquo;' && page !== totalPages) 
        //                 ? setPage(page + 1) 
        //                 : setPage(value);

        
    }

    const searchValue = searchName || '';
   
    useEffect(() => {
        
        if (searchName) {
            console.log('searchName2>>>', searchName);

            const querySearchParam = `?name=${searchName}`;
            console.log('querySearchParam>>>', querySearchParam);

            getData(querySearchParam)
                // .then(res => console.log(res))
                .then(data => {
                    const result = sortData(data.results);
                    setCharacters(result);
                    setTotalPages(data.info.pages);
                })

            localStorage.setItem('searchValue', JSON.stringify(searchName));

        } 
        
        if (!searchName) {

            const queryPage = `?page=${page}`;

            getData(queryPage)
            // .then(res => console.log(res))
                .then(data => {
                    const result = sortData(data.results);
                    console.log('result>>>', result);
                    setCharacters(result);
                    setTotalPages(data.info.pages);
                })

            localStorage.setItem('searchValue', JSON.stringify(searchName));
        }
        
    }, [searchName, page])


    return (
        <div className="rick-morty-home">
            <img src={rmLogo} className="rick-morty-logo" alt="logo" />

            <SearchBar2 
                searchValue={searchValue}
                setSearchName={debonce(setSearchName, 700)} />
            
            <div className="rick-morty-content">
                {
                    characters.map(character => {
                        
                        return (
                            <PhotoItem2 key={character.id} {...character} />
                        )
                    })
                }
            </div>

            <Pagination 
                totalPages={totalPages}
                page={page}
                onPageChange={handlePageChange} />
        </div>
    )
}