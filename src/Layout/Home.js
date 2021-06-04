
import React, {useEffect, useState} from "react";
import {listDecks, listCards, deleteDeck} from "../utils/api/index";
import Deck from "./DeckScreens/Deck";
import {useHistory} from "react-router-dom";

function Home(){
    const history = useHistory();
    const [decks, setDecks]= useState([]);
    const [deckList, setDeckList] = useState([]);
    let updatedDeckList;
    //let timesRun = 0;
    const createClicked = ()=> {
        history.push(`/decks/new`);
    };
    useEffect(()=>{
        async function loadDecks(){
        setDecks(await listDecks());
        updatedDeckList = decks.map((deck)=><Deck deck = {deck} listCards= {listCards} deleteDeck = {deleteDeck} decks = {decks}/>)
        if(deckList != updatedDeckList){
        setDeckList(updatedDeckList);    
        }
        
        //timesRun++;
        //console.log(timesRun)
        }
        loadDecks();
        
        
    }, [deckList]);
    //console.log(decks.length);
        
   
        return (<div className = "container"><div><button className = "btn btn-secondary" onClick = {createClicked}> Create Deck</button></div><div>{deckList}</div></div>);
        
       
        

}
export default Home;