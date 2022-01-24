import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
  // const rooms = {
  //   name: 'Room1',
  //   city: 'test-city',
  //   rate: '100',
  //   room_type: 'test-info',
  //   amenities: ['amenities1', 'amenities2', 'amenities3', 'amenities5'],
  // };
  return (
    <main className="contain">
      <div className="vis">
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
                  <p>
                    City:
                    {single.city}
                  </p>
                  <p>
                    Room rate: $z
                    {single.rate}
                  </p>
                  <p>
                    Room type:
                    {single.room_type}
                  </p>
                  <p>
                    Room type:
                    {single.amenities}
                  </p>
                  <button type="button" className="buttonConfig">
                    Add Reservation
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

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
};

export default RoomDetails;
