import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store from './Redux/Store/Store.js';

const rootElement=document.getElementById('root');

const root=ReactDOM.createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
)
