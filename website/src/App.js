import './App.css';
import {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from "./pages/Home"
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';


function App() {
  const [search, setSearch] = useState('');


  return (
    <React.StrictMode>
      <BrowserRouter>
        <Home/>
      </BrowserRouter>
    </React.StrictMode>
    
  );
}

export default App;
