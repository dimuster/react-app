import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const posts = [
  {'id': 1, 'text': 'Hi, how are you?)', 'likes': '3,8k'},
  {'id': 2, 'text': 'Fine :)', 'likes': '1,6k'},
  {'id': 3, 'text': 'wtf are u doing?', 'likes': '255'}
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
