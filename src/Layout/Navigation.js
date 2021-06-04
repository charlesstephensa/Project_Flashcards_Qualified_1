import React, {useEffect, useState} from "react";
import {NavLink, useRouteMatch, useParams} from "react-router-dom";
import {readDeck} from "../utils/api/index";
function Navigation(){
    const url = useRouteMatch();
    const {deckId, cardId} = useParams();
    const [deckName, setDeckName] = useState(null);

    useEffect(()=>{
        async function loadDeckName(){
            const currentDeck = await readDeck(deckId);
            setDeckName(await currentDeck.name);
            
        }
       loadDeckName();
    },[deckId]);
    //console.log(deckId);
if (url.url === `/decks/${deckId}`){
return (<div className="container bg-light"><NavLink to="/"><i className = "oi oi-home"></i>Home</NavLink> / {deckName} </div>);
} else if (url.url === `/decks/new`){
    return (<div className="container bg-light"><NavLink to="/"><i className = "oi oi-home"></i>Home</NavLink> / Create Deck </div>);
} else if (url.url === `/decks/${deckId}/edit`){
return (<div className="container bg-light"><NavLink to="/"><i className = "oi oi-home"></i>Home</NavLink> / <NavLink to = {`/decks/${deckId}`}>{deckName}</NavLink> / Edit Deck </div>);
} else if (url.url === `/decks/${deckId}/study`){
    return (<div className="container bg-light"><NavLink to="/"><i className = "oi oi-home"></i>Home</NavLink> / <NavLink to = {`/decks/${deckId}`}>{deckName}</NavLink> / Study </div>);
} else if (url.url === `/decks/${deckId}/cards/new`){
    return (<div className="container bg-light"><NavLink to="/"><i className = "oi oi-home"></i>Home</NavLink> / <NavLink to = {`/decks/${deckId}`}>{deckName}</NavLink> / Add Card </div>);
} else if (url.url === `/decks/${deckId}/cards/${cardId}/edit`){
    return (<div className="container bg-light"><NavLink to="/"><i className = "oi oi-home"></i>Home</NavLink> / <NavLink to = {`/decks/${deckId}`}>{deckName}</NavLink> / Edit Card {cardId} </div>);
        }
}

export default Navigation;