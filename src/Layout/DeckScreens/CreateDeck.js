import React, {useState} from "react"
import {useHistory} from "react-router-dom";
function CreateDeck({createDeck}){
    const history = useHistory();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const submitClicked = () =>{
        console.log(name, description);
        const deck = {name: name, description: description};
        createDeck(deck);
        history.push("/");
    }
    return (<div className = "container border border-light rounded shadow">
    <form>
        <div className="form-group">
          <label for="InputName">Name</label>
          <input type="text" class="form-control" id="InputName"  placeholder="Enter Deck Name" onChange = {(event) =>{setName(event.target.value)}}/>
        </div>
        <div class="form-group">
          <label for="InputDescription">Description</label>
          <input type="text" class="form-control" id="InputDescription" placeholder="Description" onChange = {(event) =>{setDescription(event.target.value)}}/>
        </div>  
    </form>
        <button type="submit" class="btn btn-primary" onClick = {submitClicked}>Submit</button>
     
      </div>);
}
export default CreateDeck;