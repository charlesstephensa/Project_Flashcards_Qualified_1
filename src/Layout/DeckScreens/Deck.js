import React, { useEffect, useState} from "react";
import {useHistory} from "react-router-dom";

function Deck({deck, listCards, deleteDeck, decks}){
    const history = useHistory();
    const [numOfCards, setNumOfCards] = useState(0);
    const viewClicked = () =>{
        history.push(`/decks/${deck.id}`);
    };
    const studyClicked = () =>{
        history.push(`/decks/${deck.id}/study`);
    };
    const deleteClicked = () =>{
        if(window.confirm("Are you sure you want to delete this deck?")){
         deleteDeck(deck.id);   
        }
        
    }

    //console.log("ran");
    
    useEffect(()=>{
        async function loadCards(){

         const allCardsinDeck = (await listCards(deck.id));
            setNumOfCards(await allCardsinDeck.length);
            //console.log(numOfCards);   
        
        
        }
        loadCards();

    }, decks);

    return (<div className = "shadow"><div className ="border border-light rounded bg-white"><div className = "container"><h5>{deck.name}</h5></div>
    <div className = "container"><p>{numOfCards} cards</p></div>
    <button className = "btn btn-secondary" onClick = {viewClicked}><i className = "oi oi-eye" ></i> View</button> <button className = "btn btn-primary" onClick = {studyClicked}>Study</button><button className = "btn btn-danger float-right" onClick = {deleteClicked}><i className = "oi oi-trash"></i></button></div>
        </div>)
}
export default Deck;