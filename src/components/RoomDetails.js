import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import '../roomDetails.css';
import { Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavPanel from './NavPanel';
import lunar from '../images/lunar.png';
import { deleteRoom } from '../redux/rooms/rooms';

const RoomDetails = () => {
  const rooms = useSelector((state) => state.roomsReducer);
  const { id } = useParams();

  const room = rooms.filter((r) => r.id === parseInt(id, 10));

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (id) => {
    dispatch(deleteRoom(id));
    setTimeout(() => {
      navigate('/');
      window.location.reload(true);
    }, 1000);
  };

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
                  <button type="button" className="buttonConfig upperClass" onClick={() => handleClick(single.id)}>
                    Delete Room
                  </button>
                  <NavLink to="/add_reservation" exact="true">
                    <button type="button" className="buttonConfig upperClass">
                      Add Room
                    </button>
                  </NavLink>
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
