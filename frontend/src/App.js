import React from 'react';
import './App.css';
import {urlShortener} from './urlShortener';
import { useState } from 'react';

const shortenedURL = urlShortener();
const App = () => {

    const [inputText, setInputText] = useState('');
    const handleInputChange = (event) => {
        setInputText(event.target.value);
      };
  return (
    <div className='container'>
        <div className='count'>Total existing links: <a>0</a></div>
        <div className='header'>React Url Shortener Project</div>
        <div>Link to shorten:</div>
        <input type='text' value={inputText} onChange={handleInputChange}></input>
        <button type="submit">Start</button>
        <div>Shortened Link:</div>
        <div className='result'>kisa.lt/{shortenedURL}</div>
    </div>
    
  )
}

export default App;
