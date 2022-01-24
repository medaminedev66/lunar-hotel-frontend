import React from 'react';

function Reservation() {
  return (
    <div className="reservation">
      <div className="co1">
        <div className="check-in tex">
          <h3>Check-in:</h3>
          <span>12/12/2012</span>
        </div>
        <div className="check-out tex">
          <h3>Check-out:</h3>
          <span>12/12/2012</span>
        </div>
        <div className="Nights tex">
          <h3>Nights:</h3>
          <span>3</span>
        </div>
      </div>
      <div className="co2">
        <div className="room-id tex">
          <h3>Room-id:</h3>
          <span>1268N</span>
        </div>
        <button type="button" className="btn btn-danger">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Reservation;
