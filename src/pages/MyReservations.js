import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import lunar from '../images/lunar.png';
import Reservation from '../components/Reservation';
import NavPanel from '../components/NavPanel';
import './reservations.css';
import { getReservations } from '../redux/reservations/reservations';

function MyReservation() {
  const reservations = useSelector((state) => state.reservationsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReservations());
  }, [dispatch]);
  return (
    <div className="home">
      <div className="nav">
        <img src={lunar} className="lunar-logo" alt="" />
        <NavPanel />
      </div>
      <div className="main">
        <h1>My reservations</h1>
        <h2>
          You are able to cancel the reservation before 24 hours of the
          reservation date
        </h2>
        <div className="reservations">
          {reservations.map((reservation) => (
            <Reservation reservation={reservation} key={reservation.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyReservation;
