import './App.css';
import {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from "./pages/Home"
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import Listing from "./components/Listing"


function App() {
  const [search, setSearch] = useState('');


  return (
    <React.StrictMode>
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
            <h1>
                Cojomada
            </h1>
            <p>
                Find your next investment. Send an offer. All in one platform.
            </p>
            <input placeholder="Enter Location"></input>
            <input placeholder="Price Low"></input>
            <input placeholder="Price High"></input>
            <button>Search</button>
            
           
        </header>
        <Listing address="hi" city="Durham" state="NC" price="$500,000"/>
        <Listing address="hi" city="Durham" state="NC" price="$500,000"/>
        <Listing address="hi" city="Durham" state="NC" price="$500,000"/>
        <Listing address="hi" city="Durham" state="NC" price="$500,000"/>
        <Listing address="hi" city="Durham" state="NC" price="$500,000"/>
        <Listing address="hi" city="Durham" state="NC" price="$500,000"/>
    </div>
      </BrowserRouter>
    </React.StrictMode>
    
  );
}

export default App;
