import React, {useState, useEffect} from "react";
import {useParams, useHistory} from "react-router-dom";


function EditCard({readCard, updateCard}){
    const {deckId, cardId} = useParams();
    const history = useHistory();
    const [front, setFront] = useState();
    const [back, setBack] = useState();


    useEffect(()=>{
        async function loadItems(){
            const card = await readCard(cardId);
            setFront(card.front);
            setBack(card.back);
        }
        loadItems();
    },[]);

    const doneClicked = () =>{
        history.push(`/decks/${deckId}`)
    }
    const submitClicked = () =>{
        const card = {front: front, back:back}
        updateCard(cardId, card);
        history.push(`/decks/${deckId}`);
    }



    return (
    <div className = "container border border-light rounded shadow">
            <h4>Edit Card</h4> 
    <form>
        <div className="form-group">
          <label for="InputName">Front</label>
          <input type="text" class="form-control" id="InputFront" placeholder={front} onChange = {(event) =>{setFront(event.target.value)}}/>
        </div>
        <div class="form-group">
          <label for="InputBack">Back</label>
          <input type="text" class="form-control" id="InputBack" placeholder={back} onChange = {(event) =>{setBack(event.target.value)}}/>
        </div>  
    </form>
    <button type="submit" class="btn btn-secondary" onClick = {doneClicked}>Cancel</button> <button type="submit" class="btn btn-primary" onClick = {submitClicked}>Save</button>
     </div>);
}
export default EditCard;