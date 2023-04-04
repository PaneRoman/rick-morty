import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

import SearchBar2 from '../components/SearchBar2/SearchBar2';
import ContentBlock2 from '../components/ContentBlock2/ContentBlock2';
import PhotoItem2 from '../components/PhotoItem2/PhotoItem2';

import {getData, createFakeSkeletonData, sortData} from '../Utils';

import rmLogo from '../img/rick_morty_logo.png';
import './home-page.css';



export default function HomePage() {
    // console.log('renderData >>>', renderData);

    const [characters, setCharacters] = useState(createFakeSkeletonData());
    const [searchName, setSearchName] = useState('');
    console.log('searchName>>>', searchName);

    useEffect(() => {
        const localStorageData = localStorage.getItem('characters');
        console.log('localStorageData>>>', localStorageData); // null(false) or some data(true)

        if(!localStorageData) {
            getData('/')
            // .then(res => console.log(res))
            .then(data => {
                const result = sortData(data.results);
                console.log('resultSortData>>>', result);
                // const charactersArr = data.results;
                // charactersArr.sort((a, b) => a['name'].localeCompare(b['name']));
                // console.log('charactersArr>>>', charactersArr);

                localStorage.setItem('characters', JSON.stringify(result));
                setCharacters(result);
            })
        } else {
            setCharacters(JSON.parse(localStorageData));
        }

        
    }, [])

    useEffect(() => {
        if (searchName) {
            console.log('searchName2>>>', searchName);

            const querySearchParam = `?name=${searchName}`;
            console.log('querySearchParam>>>', querySearchParam);

            getData(querySearchParam)
                // .then(res => console.log(res))
                .then(data => {
                    const result = sortData(data.results);
                    console.log('resultSortData>>>', result);
                    // const searchArr = data.results;
                    // searchArr.sort((a, b) => a['name'].localeCompare(b['name']));
                    // console.log('searchArr>>>', searchArr);

                    localStorage.setItem('characters', JSON.stringify(result));
                    setCharacters(result);
                })
        }
        
    }, [searchName])

    // const skeletonData = createFakeSkeletonData();

    // console.log('characters>>>', characters)

    return (
        <div className="rick-morty-home">
            <img src={rmLogo} className="rick-morty-logo" alt="logo" />

            <SearchBar2 setSearchName={(event) => setSearchName(event.target.value)} />
            
            <div className="rick-morty-content">
                {
                    characters.map(character => {
                        // const {id, ...itemProps} = character;

                        return (
                            <PhotoItem2 key={character.id} {...character} />
                        )
                    })
                }
            </div>
            {/* <ContentBlock2 renderData={renderData} /> */}

            {/* <Link to="/">character info page link</Link> */}
            
        </div>
    )
}