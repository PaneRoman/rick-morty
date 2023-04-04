import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { getData } from "../Utils";

import './character-page.scss';

export default function CharacterInfo() {
    
    const {id} = useParams();
    console.log(useParams());

    const [character, setCharacter] = useState(null);
    const navigate = useNavigate();

    const goBack = () => navigate(-1);
    
    useEffect(() => {
        getData(id)
            .then(data => setCharacter(data))
    }, [id])


    return(
        <div className="rick-morty-character">
            <div className="button-wrapper">
                <button className="go-back" onClick={goBack}>GO BACK</button>
            </div>
            {character && (
                <>
                    <div className="image-character-wrapper">
                        <img src={character['image']} alt="big hero" />
                    </div>
                    
                    <h1 className="character-name">{character['name']}</h1>
                    <h2 className="character-info-title">Informations</h2>
                    
                    <div className="character-info">
                        <div className="info-item">
                            <h2>ID</h2>
                            <h3>{id}</h3> 
                        </div>
                        <div className="info-item">
                            <h2>Gender</h2>
                            <h3>{character['gender']}</h3>
                        </div>
                        <div className="info-item">
                            <h2>Status</h2>
                            <h3>{character['status']}</h3>
                        </div>
                        <div className="info-item">
                            <h2>Species</h2>
                            <h3>{character['species']}</h3>
                        </div>
                        <div className="info-item">
                            <h2>Origin</h2>
                            <h3>{character['origin']['name']}</h3>
                        </div>
                        <div className="info-item">
                            <h2>Type</h2>
                            <h3>{character['type']}</h3>
                        </div>
                        
                    </div>
                    
                </>
            )}
            
        </div>
    )
}