import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const RoomForm = () => (
  <Container className="w-50 mx-auto mt-5">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Room Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCity">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="Enter City" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicRate">
        <Form.Label>Rate($)</Form.Label>
        <Form.Control type="number" placeholder="Enter rate" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicRoomType">
        <Form.Label>Room Type</Form.Label>
        <Form.Select aria-label="Select Room Type Field">
          <option>Select Room Type</option>
          <option value="1">Single</option>
          <option value="2">Double</option>
          <option value="3">Mini Suite</option>
          <option value="4">Master Suite</option>
          <option value="5">Executive Suite</option>
          <option value="6">Presidential Suite</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAmenities">
        <Form.Label>Amenities</Form.Label>
        <Form.Check
          label="43 Inch TV"
          name="group1"
        />
        <Form.Check
          label="Bedside Fridge"
          name="group2"
        />
        <Form.Check
          label="Chandelier"
          name="group3"
        />
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Choose An Image</Form.Label>
        <Form.Control type="file" />
      </Form.Group>

      <div className="d-flex mb-5">
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  </Container>
);

export default RoomForm;
