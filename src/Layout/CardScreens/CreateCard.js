import React,{useState, useEffect} from "react";
import {useHistory, useParams} from "react-router-dom";
function CreateCard({createCard, readDeck}){
    const history = useHistory();
    const [front, setFront] = useState();
    const [back, setBack] = useState();
    const {deckId} = useParams();
    const [deckName, setDeckName] = useState("");

    useEffect(()=>{
        async function loadDeck(){
            const theName = (await readDeck(deckId));
            setDeckName(theName.name)
        }
        loadDeck();
    },[]);

    const doneClicked = () =>{
        history.push(`/decks/${deckId}`)
    }
    const submitClicked = () =>{
        const card = {front: front, back:back}
        createCard(deckId, card);
        history.push(`/decks/${deckId}`);
    }



    return (<div className = "container border border-light rounded shadow">
       <h4>{deckName}: Add Card</h4> 
    <form>
        <div className="form-group">
          <label for="InputName">Front</label>
          <input type="text" class="form-control" id="InputFront" placeholder="Front side of card" onChange = {(event) =>{setFront(event.target.value)}}/>
        </div>
        <div class="form-group">
          <label for="InputBack">Back</label>
          <input type="text" class="form-control" id="InputBack" placeholder="Back side of card" onChange = {(event) =>{setBack(event.target.value)}}/>
        </div>  
    </form>
    <button type="submit" class="btn btn-secondary" onClick = {doneClicked}>Done</button> <button type="submit" class="btn btn-primary" onClick = {submitClicked}>Save</button>
     
      </div>);
}
export default CreateCard;