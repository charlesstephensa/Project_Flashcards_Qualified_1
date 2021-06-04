import React, {useState, useEffect} from "react";
import {useParams, useHistory} from "react-router-dom";


function EditDeck({readDeck, updateDeck}){
    const {deckId} = useParams();
    const history = useHistory();
    const [name, setName] = useState();
    const [description, setDescription] = useState();


    useEffect(()=>{
        async function loadItems(){
            const deck = await readDeck(deckId);
            setName(deck.name);
            setDescription(deck.description);
        }
        loadItems();
    },[]);

    const cancelClicked = () =>{
        history.push(`/decks/${deckId}`)
    }
    const saveClicked = () =>{
        const deck = {name: name, description:description}
        updateDeck(deckId, deck);
        history.push(`/decks/${deckId}`);
    }



    return (
    <div className = "container border border-light rounded shadow">
            <h4>Edit Deck</h4> 
    <form>
        <div className="form-group">
          <label for="InputName">Name</label>
          <input type="text" class="form-control" id="InputName" placeholder={name} onChange = {(event) =>{setName(event.target.value)}}/>
        </div>
        <div class="form-group">
          <label for="InputDescription">Description</label>
          <input type="text" class="form-control" id="InputBack" placeholder={description} onChange = {(event) =>{setDescription(event.target.value)}}/>
        </div>  
    </form>
    <button type="submit" class="btn btn-secondary" onClick = {cancelClicked}>Cancel</button> <button type="submit" class="btn btn-primary" onClick = {saveClicked}>Save</button>
     </div>);
}
export default EditDeck;