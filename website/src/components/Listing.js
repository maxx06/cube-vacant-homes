import {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';


export default function Listing(props) {
    return (
        <div>
            <header className="App-header">
                <div class="card">

                    <h2>{props.address}</h2>

                    <p class="address">{props.city} {props.state}</p>

                    <p class="price">{props.price}</p>

                </div>
            </header>
        </div>
    );
}