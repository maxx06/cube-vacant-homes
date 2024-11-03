import './App.css';
import {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from "./pages/Home"
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import Listing from "./components/Listing"
import Email from "./components/Email"


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
            <div>
            <input placeholder="Enter Location" className="input-64"></input>
            <input placeholder="Price Low" className="input-64"></input>
            <input placeholder="Price High" className="input-64"></input>
            </div>
            
            <button className="button-64">Search</button>
            
            
        </header>
        <Listing address="2301 Cheek Rd" city="Durham" state="NC" price="$300,000"/>
        <Listing address="307 Cherry Grv" city="Durham" state="NC" price="$275,000"/>
        <Listing address="1004 Moreland Ave" city="Durham" state="NC" price="$320,000"/>
        <Listing address="844 Horton Rd Apt 73" city="Durham" state="NC" price="$150,000"/>
        <Listing address="513 Craven St" city="Durham" state="NC" price="$250,000"/>
        <Listing address="2510 Stadium Dr" city="Durham" state="NC" price="$400,000"/>
        <div className="App-header">
          <Email />
        </div>
        
    </div>
      </BrowserRouter>
    </React.StrictMode>
    
  );
}

export default App;
