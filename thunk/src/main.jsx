// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { legacy_createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from "redux-thunk";
import Reducer from './Components/Reducer.jsx';

const thunkstore=legacy_createStore(Reducer,applyMiddleware(thunk))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={thunkstore}>
    <App />
  </Provider>,
)
