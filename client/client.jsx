import React from "react";
import ReactDom from "react-dom";
import {App} from "./App"
import {handleModifyAnswerVotes} from "../shared/utility";
let state= undefined;

fetch("http://localhost:7777/data").then(res=>res.json())
    .then(json=>{
        state=json;
        console.log("got the state",state);
        render();
    })

function handleVote(answerId,increment){
    state.answers=handleModifyAnswerVotes(state.answers,answerId,increment);
    fetch(`vote/${answerId}?increment=${increment}`)
    render();
}

function render(){
    ReactDom.hydrate(<App {...state} handleModifyAnswerClick = {handleVote}/>,document.querySelector("#container"))
}
