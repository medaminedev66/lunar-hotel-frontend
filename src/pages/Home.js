import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import RoomItem from '../components/RoomItem';
import NavPanel from '../components/NavPanel';
import { getRooms } from '../redux/rooms/rooms';
// import { getReservations } from '../redux/reservations/reservations';
import lunar from '../images/lunar.png';

const Home = () => {
  // const rooms = [1, 2, 3, 4];
  const rooms = useSelector((state) => state.roomsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRooms());
    // dispatch(getReservations());
  }, [dispatch]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="Container">
        <div className="p-2 vis">
          <FontAwesomeIcon icon={faBars} onClick={handleShow} />
        </div>
        <div className="home">
          <div className="nav">
            <img src={lunar} className="lunar-logo" alt="Lunar Hotel Logo" />
            <NavPanel />
          </div>
          <div className="main">
            <h1>Lunar&apos;s rooms</h1>
            <h2>Please select a room for reservation</h2>
            <div className="rooms">
              {rooms && rooms.map((room) => (
                <RoomItem room={room} key={room.id} rooms={rooms} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Offcanvas className="darkened-off" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><img src={lunar} className="lunar-logo-m" alt="Lunar Hotel Logo" /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <NavPanel className="text-black" />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Home;
