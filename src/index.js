import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from "./App";
import store from "./redux/state";
import reportWebVitals from './reportWebVitals';

let render = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state}
             addPost={store.addPost}
             updatePostText={store.updatePostText}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

render(state);

store.subscribe(render);

reportWebVitals();
