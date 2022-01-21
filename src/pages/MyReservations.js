import React from 'react';
import lunar from '../images/lunar.png';
import NavPanel from '../components/NavPanel';
import Reservation from '../components/Reservation';

function MyReservation() {
  const reservations = [1, 2, 3, 4, 5];
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
        <div className="rooms">
          {reservations.map((room) => (
            <NavLink to="/room" exact="true" key={room}>
              <Reservation />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyReservation;
