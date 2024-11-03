import {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';


export default function Email(props) {
    return (
        <div>
            <header className="App-header">
                <textarea className="email">Dear [REPLACE THIS WITH "Recipient Name"],

I hope this message finds you well. My name is Cojomada, and I am a real estate investor with a keen interest in improving the [REPLACE WITH "Location"] area. I believe in revitalizing local neighborhoods by turning underused or abandoned properties into vibrant, valuable assets for the community.

I have noticed an abandoned property under your possession and I would love the opportunity to discuss purchasing it for a fair price. By acquiring and renovating this property, my goal is to contribute positively to the area’s appeal, safety, and overall economic value. I would like to offer [REPLACE WITH "Offer Price"].

I would be grateful if we could discuss this opportunity further and review any relevant procedures to initiate the purchase process. Thank you for considering this proposal. Please feel free to reach me at 123-456-7890 or by responding to this email.

Warm regards,
Cojomada</textarea>
            </header>
        </div>
    );
}