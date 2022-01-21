import React from 'react';

function Reservation() {
  return (
    <div className="reservation">
      <div className="col-1">
        <div className="check-in">
          <h3>check in:</h3>
          <span>12/12/2012</span>
        </div>
        <div className="check-out">
          <h3>check out:</h3>
          <span>12/12/2012</span>
        </div>
        <div className="Nights">
          <h3>Nights:</h3>
          <span>3</span>
        </div>
      </div>
      <div className="col-2">
        <div className="room-id">
          <h3>Room-id:</h3>
          <span>1258N</span>
        </div>
        <button type="button" className="btn btn-danger">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Reservation;
