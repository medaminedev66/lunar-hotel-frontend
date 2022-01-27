import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import './roomDetails.css';
import { Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavPanel from './NavPanel';
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
        <div className="nav pt-10">
          <h1 className="brand">Lunar Hotel</h1>
          <NavPanel />
        </div>
        <ul>
          {room && room.map((single) => (
            <li key={single.id}>
              <div className="details marginFive leftMargin">
                <div className="displayTwo">
                  <img className="roomImage" src={single.picture} alt="hotel room" />
                </div>
                <div className="displayThree container top-0 info-table">
                  <div className="name-city float-right text-right">
                    <h2 className="fw-600">{single.name}</h2>
                    <p>{single.city}</p>
                  </div>
                  <table className="table">
                    <tbody>
                      <tr>
                        <th>Room Number</th>
                        <td>{single.id}</td>
                      </tr>
                      <tr>
                        <th>Room Type</th>
                        <td>{single.room_type}</td>
                      </tr>
                      <tr>
                        <th>Amenities</th>
                        <td>{single.amenities}</td>
                      </tr>
                      <tr>
                        <th>Rate</th>
                        <td>
                          $
                          {single.rate}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="flex flex-row button-text justify-around">
                    <button type="button" className="buttonConfig upperClass" onClick={() => handleClick(single.id)}>
                      <h3>Delete Room</h3>
                    </button>
                    <NavLink to="/add_reservation" exact="true">
                      <button type="button" onClick={() => handleId(single.id)} className="buttonConfig upperClass">
                        <h3>Reserve A Room</h3>
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <Offcanvas className="darkened-off" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h1 className="brand">Lunar Hotel</h1></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <NavPanel className="text-black" />
        </Offcanvas.Body>
      </Offcanvas>
    </main>
  );
};

export default RoomDetails;
