import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './reservation.css';
import { Offcanvas } from 'react-bootstrap';

const Reservations = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="fullScreen">
      <div className="vis">
        <FontAwesomeIcon icon={faBars} onClick={handleShow} />
      </div>
      <div className="bigImage">
        <div className="overlap">
          <div className="txtWrapper">
            <h1 className="upperCase txtWhite">Book a reservation</h1>
            <p className="txtWhite">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              erat massa, accumsan a porta quis, faucibus et mi. Curabitur
              cursus nulla eu magna posuere, sit amet fringilla orci elementum.
            </p>
            <button className="upperCase resBtn" type="button">
              Add reservation
            </button>
          </div>
        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Lunar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Reservations;
