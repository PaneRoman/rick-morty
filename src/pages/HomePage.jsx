import { useState, useEffect } from "react";

import SearchBar2 from '../components/SearchBar2/SearchBar2';
import PhotoItem2 from '../components/PhotoItem2/PhotoItem2';
import Pagination from "../components/Pagination/Pagination";

import {getData, createFakeSkeletonData, debonce, sortData} from '../Utils';

import rmLogo from '../img/rick_morty_logo.png';

import './home-page.scss';


export default function HomePage() {
   
    const search = localStorage.getItem('searchValue') ? JSON.parse(localStorage.getItem('searchValue')) : '';
    const startPage = localStorage.getItem('currentPage') ? JSON.parse(localStorage.getItem('currentPage')) : 1;
    console.log('startPage>>>', startPage)

    const [characters, setCharacters] = useState(createFakeSkeletonData());
    const [searchName, setSearchName] = useState(search);
    const [page, setPage] = useState(startPage);
    const [limit, setLimit] = useState(20);
    const [totalPages, setTotalPages] = useState(null);

    console.log('totalPages>>>', totalPages);
    console.log('page>>>', page);
    /**лимит 20 віддає АПИ https://rickandmortyapi.com/. Для функционала з полем Select, та вибором іншого значення
     * лимита треба використовувати setLimit в цьому хуці
    */

    const handlePageChange = (value) => {

        console.log('handlePageChangeValue>>>', value);
        
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

    const handleSearchChange = (value) => {

        console.log('handleSearchChangeValue>>>', value);

        setSearchName(value);
        setPage(1);
    }

    const searchValue = searchName || '';


    // useEffect(() => {

    //     console.log('test');
    //     setPage(1);


    // }, [searchName])
   
    useEffect(() => {
        
        if (searchName) {
            console.log('searchName2>>>', searchName);

            const querySearchParam = `?page=${page}&name=${searchName}`;
            console.log('querySearchParam>>>', querySearchParam);

            // ?page=2&name=rick

            getData(querySearchParam)
                // .then(res => console.log(res))
                .then(data => {
                    const result = sortData(data.results);
                    console.log('result>>>', result);
                    setCharacters(result);
                    setTotalPages(data.info.pages);
                })

            localStorage.setItem('searchValue', JSON.stringify(searchName));
            localStorage.setItem('currentPage', JSON.stringify(page));

        } 
        
        if (!searchName) {

            const queryPage = `?page=${page}`;
            console.log('queryPage>>>', queryPage);

            getData(queryPage)
            // .then(res => console.log(res))
                .then(data => {
                    const result = sortData(data.results);
                    console.log('result>>>', result);
                    setCharacters(result);
                    setTotalPages(data.info.pages);
                })

            localStorage.setItem('searchValue', JSON.stringify(searchName));
            localStorage.setItem('currentPage', JSON.stringify(page));

        }
        
    }, [searchName, page])




    return (
        <div className="rick-morty-home">
            <img src={rmLogo} className="rick-morty-logo" alt="logo" />

            <SearchBar2 
                searchValue={searchValue}
                // setSearchName={debonce(setSearchName, 1000)} 
                handleSearchChange={debonce(handleSearchChange, 1000)} />
            
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
                // totalPages={Math.floor(totalPages/3)}
                totalPages={totalPages}
                page={page}
                onPageChange={handlePageChange} />
        </div>
    )
}