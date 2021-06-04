import React from "react";

function EachCard({card, deleteCard, history, url}){
    const deleteClicked = () => {
        deleteCard(card.id)
    }
    const editClicked = () =>{
        history.push(`${url}/cards/${card.id}/edit`)
    }
    if (card.cards === undefined){
        return (<div className = "border border-secondary rounded"><div><p>{card.front}</p><p>{card.back}</p></div> <button className="btn btn-secondary rounded" onClick = {editClicked}><i className="oi oi-pencil"></i> Edit</button> <button className = "btn btn-danger float-right" onClick = {deleteClicked}><i className = "oi oi-trash"></i></button></div>)
    }
return null;
}
export default EachCard 