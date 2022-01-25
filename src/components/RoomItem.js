import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import image from '../images/pexels-pixabay-164595.jpg';

const RoomItem = ({ room }) => {
  const {
    name, id,
  } = room;

  if (room !== null) {
    return (
      <Container className="room-item">
        <Row>
          <Col>
            <Image className="room-image" src={image} alt="hotel room" />
          </Col>
        </Row>
        <Row>
          <Col>
            {name && (
              <h2 className="hotelName">
                {name}
              </h2>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            {id && (
              <Link to={{ pathname: `room_details/${id}` }} className="btn btn-primary upperCase mb-2">Add Room</Link>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
  return <p>Please add a room</p>;
};

RoomItem.propTypes = {
  room: PropTypes.instanceOf(Object).isRequired,
};

export default RoomItem;
