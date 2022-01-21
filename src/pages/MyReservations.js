import React from 'react';
import lunar from '../images/lunar.png';
import NavPanel from '../components/NavPanel';

function MyReservation() {
  return (
    <div className="home">
      <div className="nav">
        <img src={lunar} className="lunar-logo" alt="" />
        <NavPanel />
      </div>
      <div className="main">
        <h1>My reservations</h1>
        <h2>
          You are able to cancel the reservation before 24 hours of the reservation
          date
        </h2>
      </div>
    </div>
  );
}

export default MyReservation;
