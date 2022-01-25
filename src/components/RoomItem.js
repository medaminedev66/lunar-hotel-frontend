import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

const RoomItem = ({ room }) => {
  const {
    name, id, picture,
  } = room;

  return (
    <Container className="room-item">
      <Row>
        <Col>
          <Image className="room-image" src={picture} alt="hotel room" />
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
            <Link to={{ pathname: `room_details/${id}` }} className="btn btn-primary upperCase mb-2">See room</Link>
          )}
        </Col>
      </Row>
    </Container>
  );
};

RoomItem.propTypes = {
  room: PropTypes.instanceOf(Object).isRequired,
};

export default RoomItem;
