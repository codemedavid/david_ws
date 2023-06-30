import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import img1 from './images/img1.jpeg'

const root = ReactDOM.createRoot(document.getElementById('root'));
let style = {
  height: '120px',
  width: '100%',
  objectFit: 'contain',
 
}


root.render(
  <React.StrictMode>

       <App name="Angelo" bootcamp="65">
       <img src={img1} style={style} alt="" />
       <img src="./img/img1.jpeg" style={style} alt="" />
       </App>

     
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
