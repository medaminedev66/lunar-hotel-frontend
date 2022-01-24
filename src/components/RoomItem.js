/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
// import RoomDetails from './RoomDetails';
import image from '../images/pexels-pixabay-164595.jpg';

const RoomItem = ({ room, rooms }) => {
  const {
    name, city, rate, room_type, amenities, id,
  } = room;

  // const handleClick = (id) => {
  //   console.log(id);
  // };
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
            <h2>
              Hotel Name:
              {' '}
              {name}
            </h2>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          {city && (
            <h3>
              City Location:
              {' '}
              {city}
            </h3>
          )}
          {rate && (
            <h3>
              24hrs Rate:
              {' '}
              $
              {rate}
            </h3>
          )}
          {room_type && (
            <h3>
              Room Type:
              {' '}
              {room_type}
            </h3>
          )}
          {amenities && (
            <h3>
              Amenities:
              {' '}
              {amenities}
            </h3>
          )}
          {id && (
            <Link to={{ pathname: 'room_details/' }}>Click me</Link>
          )}
        </Col>
      </Row>
    </Container>
  );
};

RoomItem.propTypes = {
  room: PropTypes.instanceOf(Object).isRequired,
  rooms: PropTypes.instanceOf(Object).isRequired,
};

export default RoomItem;
