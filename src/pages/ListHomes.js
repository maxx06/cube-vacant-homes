import {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Email from "./Email"
import Listing from "../components/Listing"

export default function ListHomes() {
    
    return (
    <div>
        <header className="App-header">
            <h1>
                hi
            </h1>
            <Listing address="hi" city="Durham" state="NC" price="$500,000"/>
            {/* <Email/> */}
        </header>
    </div>
    );
}