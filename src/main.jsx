import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom/client';
//configuring redux store
import { thunk } from "redux-thunk"
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux"
import { userAuthReducer } from "./store/reducer/appStorage"


//configuring the redux store
const rootReducer = combineReducers({
  userAuth: userAuthReducer,
})
//creating store
const store = createStore(rootReducer, applyMiddleware(thunk))



createRoot(document.getElementById('root')).render(
  
   <Provider store={store}>
  <BrowserRouter>
  <App/>
  </BrowserRouter>
</Provider>

)
















// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

