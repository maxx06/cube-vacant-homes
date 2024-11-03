import React from 'react';

export default function Listing(props) {
  return (
    <div className="flex">
      <div className="card">
        <a href="#"><h2>{props.address}</h2></a>
        <img src={props.image} alt={`${props.address}`} className="card-img" />
        <p className="address">{props.city}, {props.state}</p>
        <p className="price">{props.price}</p>
      </div>
    </div>
  );
}
