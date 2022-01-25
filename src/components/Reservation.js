import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteReservation } from '../redux/reservations/reservations';

function Reservation(props) {
  const dispatch = useDispatch();
  const { reservation } = props;
  return (
    <div className="reservation">
      <div className="co1">
        <div className="check-in tex">
          <h3>Check-in:</h3>
          <span>{reservation.check_in}</span>
        </div>
        <div className="check-out tex">
          <h3>Check-out:</h3>
          <span>{reservation.check_out}</span>
        </div>
        <div className="Nights tex">
          <h3>Nights:</h3>
          <span>{reservation.nights}</span>
        </div>
      </div>
      <div className="co2">
        <div className="room-id tex">
          <h3>Room-id:</h3>
          <span>
            №
            {reservation.id}
          </span>
        </div>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => dispatch(deleteReservation(reservation.id))}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

Reservation.propTypes = {
  reservation: PropTypes.instanceOf(Object).isRequired,
};
export default Reservation;
