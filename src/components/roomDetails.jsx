import React, { useState } from 'react';
import '../roomDetails.css';
import { Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBars, faScrewdriver } from '@fortawesome/free-solid-svg-icons';
import NavPanel from './NavPanel';
import Image from '../images/pexels-pixabay-164595.jpg';

function RoomDetails() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const roomsDb = {
    name: 'Room1',
    city: 'test-city',
    rate: '100',
    room_type: 'test-info',
    amenities: ['amenities1', 'amenities2', 'amenities3', 'amenities5'],
  };
  return (
    <main className="contain">
      <div className="vis">
        <FontAwesomeIcon icon={faBars} onClick={handleShow} />
      </div>
      <section className="displayRoom">
        <div className="navPanel">
          <NavPanel />
        </div>
        <div className="details marginFive">
          <div className="displayTwo">
            <img className="roomImage" src={Image} alt="hotel room" />
          </div>
          <div className="displayThree">
            <h1>{roomsDb.name}</h1>
            <p>
              City:
              {roomsDb.city}
            </p>
            <p>
              Room rate: $
              {roomsDb.rate}
            </p>
            <p>
              Room type:
              {roomsDb.room_type}
            </p>
            <ul>
              {roomsDb.amenities.map((amenity) => (
                <li key={amenity}>{amenity}</li>
              ))}
            </ul>
            <button type="button" className="buttonConfig">
              <FontAwesomeIcon icon={faScrewdriver} className="fs-5 me-2" />
              Configure
              <FontAwesomeIcon icon={faArrowRight} className="fs-5 mx-2" />
            </button>
          </div>
        </div>
      </section>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Lunar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </main>
  );
}

export default RoomDetails;
