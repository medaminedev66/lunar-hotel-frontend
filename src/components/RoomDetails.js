import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import './roomDetails.css';
import { Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavPanel from './NavPanel';
import lunar from '../images/lunar.png';
import { deleteRoom } from '../redux/rooms/rooms';
import { setId } from '../redux/reservations/setId';

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

  const handleId = (id) => {
    dispatch(setId(id));
  };

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
        <div className="details marginFive leftMargin">
          <div className="display-two">
            <img
              className="room-image"
              src={room[0].picture}
              alt="hotel room"
            />
          </div>
          <div className="display-three">
            <h1 className="upperCase">{room[0].name}</h1>
            <p className="badg-odd">
              <span className="items">City: </span>
              <span className="itemsValue">{room[0].city}</span>
            </p>
            <p className="badg-even">
              <span className="items">Room rate: </span>
              <span className="itemsValue">
                $
                {room[0].rate}
              </span>
            </p>
            <p className="badg-odd">
              <span className="items">Room type: </span>
              <span className="itemsValue">{room[0].room_type}</span>
            </p>
            <p className="badg-even">
              <span className="items">Amenities: </span>
              <span className="itemsValue">{room[0].amenities}</span>
            </p>
            <div className="buttons">
              <button
                type="button"
                className="buttonConfig upperClass"
                onClick={() => handleClick(room[0].id)}
              >
                Delete Room
              </button>
              <NavLink to="/add_reservation" exact="true">
                <button
                  type="button"
                  onClick={() => handleId(room[0].id)}
                  className="buttonConfig upperClass"
                >
                  Reserve A Room
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      <Offcanvas className="darkened-off" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src={lunar} className="lunar-logo-m" alt="Lunar Hotel Logo" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <NavPanel />
        </Offcanvas.Body>
      </Offcanvas>
    </main>
  );
};

export default RoomDetails;
