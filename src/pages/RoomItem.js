import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import image from '../images/pexels-pixabay-164595.jpg';

function RoomItem() {
  return (
    <Container className="room-item">
      <Row>
        <Col>
          <Image className="room-image" src={image} alt="" />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Room number</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="fs-6 text fw-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            facilis quidem voluptatem non doloribus voluptatum. Itaque earum,
            recusandae voluptatibus est facere id explicabo officiis dolores eum
            a doloremque suscipit esse.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default RoomItem;
