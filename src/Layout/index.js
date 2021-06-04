import React, {useState} from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home";
import Navigation from "./Navigation";
import CreateDeck from "./DeckScreens/CreateDeck"; import ViewDeck from "./DeckScreens/ViewDeck"; import EditDeck from "./DeckScreens/EditDeck";
import CreateCard from "./CardScreens/CreateCard";import EditCard from "./CardScreens/EditCard";
import Study from "./StudyScreens/Study";
import {Route, Switch} from "react-router-dom";
import {createDeck,listCards,readDeck, deleteDeck, deleteCard, createCard,updateCard, readCard, updateDeck} from "../utils/api/index";

function Layout() {
  
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path = "/">
            <Home/>
          </Route>
          <Route exact path = "/decks/new">
          <Navigation/>
            <CreateDeck createDeck = {createDeck}/>
          </Route>

          <Route exact path = "/decks/:deckId/">
            <Navigation/>
            <ViewDeck listCards = {listCards} readDeck = {readDeck} deleteDeck = {deleteDeck} deleteCard = {deleteCard} />
          </Route>

          <Route exact path = "/decks/:deckId/cards/new">
          <Navigation/>
            <CreateCard createCard = {createCard} readDeck = {readDeck}/>
          </Route>

          <Route exact path = "/decks/:deckId/cards/:cardId/edit">
          <Navigation/>
            <EditCard updateCard = {updateCard} readCard = {readCard}/>
          </Route>

          <Route exact path = "/decks/:deckId/edit">
          <Navigation/>
            <EditDeck updateDeck = {updateDeck} readDeck = {readDeck}/>
          </Route>

          <Route exact path = "/decks/:deckId/study">
          <Navigation/>
            <Study listCards = {listCards} readDeck = {readDeck}/>
          </Route>
        <NotFound />
        </Switch>
        
      </div>
    </>
  );
}

export default Layout;
