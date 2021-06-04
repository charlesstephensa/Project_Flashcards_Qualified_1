import React, {useState, useEffect} from "react";
import {useParams,useHistory,useRouteMatch} from "react-router-dom";
import EachCard from "../CardScreens/EachCard";
function ViewDeck({listCards, readDeck, deleteDeck, deleteCard}){
    const history = useHistory();
    const url = useRouteMatch();
    let cardList;
   const {deckId} = useParams();
   const [deck, setDeck] = useState({name: "", description: ""});
   const [cardItems, setCardItems] = useState(null);

   const deleteClicked = () =>{
    deleteDeck(deckId);
    history.push("/")
    }
    const editClicked = () =>{
        history.push(`${url.url}/edit`)
    }
    const addClicked = () =>{
        history.push(`${url.url}/cards/new`)
    }
    const studyClicked = () =>{
        history.push(`${url.url}/study`)
    }
   useEffect(()=>{
       //console.log(url.url);
    async function loadItems(){
        const currentDeck = await readDeck(deckId)
    setDeck(await currentDeck);
    const allCardsInDeck = await listCards(deckId);
    cardList = allCardsInDeck.map((card)=><EachCard card={card} deleteCard = {deleteCard} url ={url.url} history = {history} name = {deck.name}/>)
    setCardItems(cardList);
    }
    loadItems();
   },cardItems);
    return (<div className = "shadow">
        <div className ="border border-light rounded bg-white">
            <div className = "container"><h5>{deck.name}</h5></div>
            <div className = "container"><p>{deck.description}</p></div>
    <button className = "btn btn-secondary" onClick = {editClicked} ><i className = "oi oi-pencil" ></i> Edit</button> 
    <button className = "btn btn-primary" onClick = {studyClicked}>Study</button>
    <button className = "btn btn-primary" onClick = {addClicked}><i className = "oi oi-plus"></i>Add Cards</button>
    <button className = "btn btn-danger float-right" onClick = {deleteClicked}><i className = "oi oi-trash"></i></button> 
    </div> 
    <div className = "container"><h3>Cards</h3><div>{cardItems}</div></div> 
    </div>);
}

export default ViewDeck;