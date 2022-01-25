import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import '../roomDetails.css';
import { Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavPanel from './NavPanel';
import lunar from '../images/lunar.png';

const RoomDetails = () => {
  const rooms = useSelector((state) => state.roomsReducer);
  const { id } = useParams();

  const room = rooms.filter((r) => r.id === parseInt(id, 10));

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <main className="contain">
      <div className="p-2 vis">
        <FontAwesomeIcon icon={faBars} onClick={handleShow} />
      </div>
      <section className="displayRoom">
        <div className="nav">
          <img src={lunar} className="lunar-logo" alt="Lunar Hotel Logo" />
          <NavPanel />
        </div>
        <ul>
          {room && room.map((single) => (
            <li key={single.id}>
              <div className="details marginFive leftMargin">
                <div className="displayTwo">
                  <img className="roomImage" src={single.picture} alt="hotel room" />
                </div>
                <div className="displayThree">
                  <h1 className="upperCase">{single.name}</h1>
                  <p className="mb-2 badg-odd">
                    <span className="items">City: </span>
                    <span className="itemsValue">{single.city}</span>
                  </p>
                  <p className="mb-2 badg-even">
                    <span className="items">Room rate: </span>
                    <span className="itemsValue">
                      $
                      {single.rate}
                    </span>
                  </p>
                  <p className="mb-2 badg-odd">
                    <span className="items">Room type: </span>
                    <span className="itemsValue">{single.room_type}</span>
                  </p>
                  <p className="mb-2 badg-even">
                    <span className="items">Amenities: </span>
                    <span className="itemsValue">{single.amenities}</span>
                  </p>
                  <NavLink to="/add_reservation" exact="true">
                    <button type="button" className="buttonConfig upperClass">
                      Add Reservation
                    </button>
                  </NavLink>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <Offcanvas className="darkened-off" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><img src={lunar} className="lunar-logo-m" alt="Lunar Hotel Logo" /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <NavPanel />
        </Offcanvas.Body>
      </Offcanvas>
    </main>
  );
};

export default RoomDetails;
