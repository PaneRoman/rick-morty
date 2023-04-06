import { useState, useEffect } from "react";

import SearchBar2 from '../components/SearchBar2/SearchBar2';
import PhotoItem2 from '../components/PhotoItem2/PhotoItem2';

import {getData, createFakeSkeletonData, debonce, sortData} from '../Utils';

import rmLogo from '../img/rick_morty_logo.png';

import './home-page.scss';


export default function HomePage() {
   
    const search = localStorage.getItem('searchValue') ? JSON.parse(localStorage.getItem('searchValue')) : '';

    const [characters, setCharacters] = useState(createFakeSkeletonData());
    const [searchName, setSearchName] = useState(search);
    
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
                })

            localStorage.setItem('searchValue', JSON.stringify(searchName));

        } 
        else {
            getData('/')
            // .then(res => console.log(res))
                .then(data => {
                    const result = sortData(data.results);
                    setCharacters(result);
                })

            localStorage.setItem('searchValue', JSON.stringify(searchName));
        }
        
    }, [searchName])


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
        </div>
    )
}