import { React, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import RoomItem from '../components/RoomItem';
import NavPanel from '../components/NavPanel';
import { getRooms } from '../redux/rooms/rooms';

function Home() {
  const rooms = [1, 2, 3, 4];
  // const rr = useSelector((state) => state.roomsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRooms());
  }, [dispatch]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="Container">
        <div className="vis">
          <FontAwesomeIcon icon={faBars} onClick={handleShow} />
        </div>
        <div className="home">
          <div className="nav">
            <NavPanel />
          </div>
          <div className="main">
            <h1>Lunar&apos;s rooms</h1>
            <div className="rooms">
              {rooms.map((e) => (
                <NavLink to="/room" exact="true" key={e}>
                  <RoomItem />
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Home;
