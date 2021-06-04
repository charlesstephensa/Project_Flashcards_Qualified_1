import React,{useState} from "react";
import {useHistory} from "react-router-dom"
function StudyCard({cards, deckId}){
    
    const [index, setIndex] = useState(0);
    const front = cards[index].front; const [visible, setVisible] = useState(false);
    const back = cards[index].back; const history = useHistory();const [current, setCurrent]=useState("front");
    const newCards = cards.filter((card)=>card.cards=== undefined);

    const [cardDisplay, setDisplay] = useState(front);


     const addCard= () =>{
        history.push(`/decks/${deckId}/cards/new`);
     }
    const nextClicked = () =>{
        if (cardDisplay == back){
         if(index < newCards.length-1){
            setIndex(index+1);
            setCurrent("front");
            setDisplay(front);
        setVisible(false);}else {
                if(window.confirm("Restart Cards")){
                    setIndex(0);
                    setDisplay(front);
                    setCurrent("front")
                } else {
                    history.push(`/decks/${deckId}`);
                }
            }   
        }
        
    }
    const flipClicked = () =>{
        if(cardDisplay == back){
            if(index <= newCards.length-1){
            setDisplay(front);
            setCurrent("front");
            setVisible(false);
            }

        } else {
            setDisplay(back);
            setCurrent("back");
            setVisible(true);
        }
    }
if(newCards.length >= 3){
    return (<div className = "container border border-secondary rounded shadow"><div>{index + 1} of {newCards.length} <div className = "float-right">{current}</div></div>{cardDisplay}<button className="btn btn-primary border border-seconday float-right" onClick = {nextClicked} hidden ={!visible}>Next</button> <button className="btn btn-secondary border border-seconday float-right" onClick = {flipClicked}>Flip</button> </div>);
}
 return (<div>
     <div><h6>Not enough cards.</h6></div>
     <div><p>You need at least 3 cards to study. There are {newCards.length} cards in this deck.</p></div>
     <button className = "btn btn-primary" onClick = {addCard}><i className = "oi oi-plus"></i> Add Card</button></div>);
}
export default StudyCard;