import React from 'react';
import Listing from '../components/Listing';
import { useLocation } from 'react-router-dom';

function Results({ listings, onSendOffer }) {
  const location = useLocation();
  const criteria = location.state || {}; // Set default to an empty object if undefined

  const filteredListings = listings.filter((listing) => {
    const matchesLocation = criteria.location
      ? listing.city.toLowerCase() === criteria.location.toLowerCase()
      : true;
    const matchesPrice =
      (!criteria.priceLow || listing.price >= criteria.priceLow) &&
      (!criteria.priceHigh || listing.price <= criteria.priceHigh);

    return matchesLocation && matchesPrice;
  });

  return (
    <div className="App-header">
      <h2>Search Results</h2>
      <div className="scroll-container">
        {filteredListings.length > 0 ? (
          filteredListings.map((listing) => (
            <div key={listing.id}>
              <Listing
                address={listing.address}
                city={listing.city}
                state={listing.state}
                price={`$${listing.price.toLocaleString()}`}
                image={listing.image}
              />
              <button
                className="button-64"
                onClick={() => onSendOffer(listing)}
              >
                Send Offer
              </button>
            </div>
          ))
        ) : (
          <p>No listings match your search criteria.</p>
        )}
      </div>
    </div>
  );
}

export default Results;
