/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import image from '../images/pexels-pixabay-164595.jpg';

const RoomItem = ({ room }) => {
  const {
    name, city, rate, room_type, amenities, picture,
  } = room;
  return (
    <Container className="room-item">
      <Row>
        <Col>
          <Image className="room-image" src={image} alt="hotel room" />
        </Col>
      </Row>
      <Row>
        <Col>
          {
            name && <h2>{name}</h2>
          }
        </Col>
      </Row>
      <Row>
        <Col>
          {
            city && <h3>{city}</h3>
          }
          {
            rate && (
            <h3>
              $
              {' '}
              {rate}
            </h3>
            )
          }
          {
            room_type && <h3>{room_type}</h3>
          }
          {
            amenities && <h3>{amenities}</h3>
          }
          {
            picture && <Image className="room-image" src={picture} alt="hotel room" />
          }
        </Col>
      </Row>
    </Container>
  );
};

RoomItem.propTypes = {
  room: PropTypes.instanceOf(Object).isRequired,
};

export default RoomItem;
