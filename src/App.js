import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import React from 'react';
import Home from "./pages/Home";
import Results from "./pages/Results";
import OfferPage from "./pages/OfferPage";
import listingsData from "./data/listings";

function App() {
  const navigate = useNavigate();

  const handleSearch = (criteria) => {
    navigate('/results', { state: criteria || {} }); // Ensure criteria is passed as an object, even if empty
  };

  const handleSendOffer = (listing) => {
    navigate('/offer', {
      state: {
        address: listing.address,
        ownerName: listing.ownerName,
        userEmail: listing.userEmail,
        price: listing.price
      },
    });
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home onSearch={handleSearch} />} />
        <Route path="/results" element={<Results listings={listingsData} onSendOffer={handleSendOffer} />} />
        <Route path="/offer" element={<OfferPage />} />
      </Routes>
    </div>
  );
}

export default App;
