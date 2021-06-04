import React,{useEffect, useState} from "react"
import { useParams} from "react-router-dom";
import StudyCard from "./StudyCard";

function Study({listCards, readDeck}){
    const [name, setName] = useState("");
    const [cardElement, setElement] = useState("");
    const [index, setIndex] = useState(0);
    const {deckId} = useParams();
    useEffect(()=>{
        async function loadItems(){
        const deck = await readDeck(deckId);
        setName(deck.name);
        const arrOfCards = await listCards(deckId);
        setElement(<StudyCard  cards={arrOfCards} index={index} setIndex = {setIndex} deckId={deckId}/>)
        }
        loadItems();
    }, []);
return (<div><h3>{name}: Study</h3>{cardElement}</div>)
}
export default Study;