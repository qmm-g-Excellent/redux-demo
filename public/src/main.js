import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import App from "./components/App";
import reducer from "./reducers/index"

const store = createStore(reducer);

function renderFunction(){
  render(
    <App value={store.getState()}
         onAdd={()=>store.dispatch({type : "ADD"})}
         onDecrease={()=>store.dispatch({type:"Decrease"})}
    />,
    document.getElementById("app")
  );
}

renderFunction();
store.subscribe(renderFunction);
