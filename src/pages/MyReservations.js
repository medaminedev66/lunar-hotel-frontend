import { React, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import lunar from '../images/lunar.png';
import Reservation from '../components/Reservation';
import NavPanel from '../components/NavPanel';
import './reservations.css';
import { getReservations } from '../redux/reservations/reservations';

function MyReservation() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const reservations = useSelector((state) => state.reservationsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReservations());
  }, [dispatch]);
  return (
    <div className="home">
      <div className="p-2 vis">
        <FontAwesomeIcon icon={faBars} onClick={handleShow} />
      </div>
      <div className="home">
        <div className="nav">
          <img src={lunar} className="lunar-logo" alt="Lunar Hotel Logo" />
          <NavPanel />
        </div>
        <div className="main">
          <h1>My reservations</h1>
          <h2>
            You are able to cancel the reservation before 24 hours of the
            reservation date
          </h2>
          <div className="reservations">
            {reservations.map((reservation) => (
              <Reservation reservation={reservation} key={reservation.id} />
            ))}
          </div>
        </div>
        <Offcanvas className="darkened-off" show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title><img src={lunar} className="lunar-logo-m" alt="Lunar Hotel Logo" /></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <NavPanel />
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
}

export default MyReservation;
