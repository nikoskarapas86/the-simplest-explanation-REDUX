import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import allReducers from './reducers/index'
import {Provider} from 'react-redux';
// //ACTIONS
// const increment = ()=>{
//   return {
//     type:"INCREMENT"
//   }
// }
// const decrement = ()=>{
//   return {
//     type:"DECREMENT"
//   }
// }
// //REDUCER
// const countReducer =(state =0,action)=>{
//   switch (action.type){
//      case "INCREMENT":
//        return state+1
//      case "DECREMENT":
//        return state-1  
//   }
// }
// //STORE
// let store =createStore(countReducer)
// store.subscribe(()=>console.log(store.getState()))
// store.dispatch(increment())


// //ACTION

// const increment = () => {
//   return {
//     type: "INCREMENT",
//   };
// };
// const decrement = () => {
//   return {
//     type: "DECREMENT",
//   };
// };

// //REDUCER
// const counterReducer=(state=0,action)=>{
//   switch(action.type){
//     case "INCREMENT":
//       return state +1;
//     case "DECREMENT":
//       return state -1;  
//   }

// }

//  //STORE 
//  let store = createStore(counterReducer); 

//  store.subscribe(()=> console.log(store.getState()));

//  store.dispatch(increment());
//  store.dispatch(decrement());

let store = createStore(allReducers); 

ReactDOM.render(
<Provider store ={store}>
<App />
</Provider>,
  document.getElementById("root")
);

reportWebVitals();
