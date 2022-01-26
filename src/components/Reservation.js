import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteReservation } from '../redux/reservations/reservations';
import differenceBetweenDate, { totalRoomRate } from '../logic/date_logic';

function Reservation(props) {
  const dispatch = useDispatch();
  const { reservation } = props;
  const rooms = useSelector((state) => state.roomsReducer);

  const getRoomRate = (id) => {
    let totalRate = 0;
    rooms.forEach((room) => {
      if (room.id === id) {
        totalRate += room.rate;
      }
    });
    return totalRate;
  };
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
          <span>{differenceBetweenDate(reservation.check_in, reservation.check_out)}</span>
        </div>
      </div>
      <div className="co2">
        <div className="room-id tex">
          <h3>Room-id:</h3>

          <span>
            №
            {reservation.room_id}
          </span>
        </div>
        <div className="rate-id tex">
          <h3>Total Rate:</h3>
          <span>
            $
            {totalRoomRate(
              reservation.check_in,
              reservation.check_out,
              getRoomRate(reservation.room_id),
            )}
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
