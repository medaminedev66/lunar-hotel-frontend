import React from 'react';
import { Formik } from 'formik';
import './createroom.css';
import { Container, Form, Button } from 'react-bootstrap';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, '*Names must have at least 2 characters')
    .max(50, '*Names can\'t be longer than 50 characters')
    .required('*Name is required'),

  city: Yup.string()
    .min(2, '*City must have at least 2 characters')
    .max(25, '*City can\'t be longer than 25 characters')
    .required('*City is required'),

  rate: Yup.number()
    .min(10, '*Rate must be $10 or greater')
    .required('*Rate is required'),

  room_type: Yup.string()
    .required('*Room Type is required'),

  picture: Yup.string()
    .required('*Picture is required'),
});

const CreateRoom = () => (
  <section className="form-container">
    <Container className="my_container">
      <Formik
        initialValues={{
          name: '',
          city: '',
          rate: 0,
          room_type: '',
          picture: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          resetForm();
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit} className="mx-auto row row-cols-1 row-cols-lg-2 bg-white p-4 d-flex justify-content-center align-items-center">
            <Form.Group className="col mb-3" controlId="formBasicName">
              <Form.Label>Room Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className={touched.name && errors.name ? 'error' : null}
              />
              {touched.name && errors.name ? (
                <div className="error-message">{errors.name}</div>
              ) : null}
            </Form.Group>

            <Form.Group className="col mb-3" controlId="formBasicCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                placeholder="Enter City"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.city}
                className={touched.city && errors.city ? 'error' : null}
              />
              {touched.city && errors.city ? (
                <div className="error-message">{errors.city}</div>
              ) : null}
            </Form.Group>

            <Form.Group className="col mb-3" controlId="formBasicRate">
              <Form.Label>Rate($)</Form.Label>
              <Form.Control
                type="number"
                name="rate"
                placeholder="Enter rate"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.rate}
                className={touched.rate && errors.rate ? 'error' : null}
              />
              {touched.rate && errors.rate ? (
                <div className="error-message">{errors.rate}</div>
              ) : null}
            </Form.Group>

            <Form.Group className="col mb-3" controlId="formBasicRoomType">
              <Form.Label>Room Type</Form.Label>
              <Form.Select
                aria-label="Select Room Type Field"
                name="room_type"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.room_type}
                className={touched.room_type && errors.room_type ? 'error' : null}
              >
                <option>Select Room Type</option>
                <option value="1">Single</option>
                <option value="2">Double</option>
                <option value="3">Mini Suite</option>
                <option value="4">Master Suite</option>
                <option value="5">Executive Suite</option>
                <option value="6">Presidential Suite</option>
              </Form.Select>

              {touched.room_type && errors.room_type ? (
                <div className="error-message">{errors.room_type}</div>
              ) : null}
            </Form.Group>

            <Form.Group className="col mb-3" controlId="formBasicAmenities">
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

            <Form.Group controlId="formFile" className="col mb-3">
              <Form.Label>Choose An Image</Form.Label>
              <Form.Control
                type="file"
                name="picture"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.picture}
                className={touched.picture && errors.picture ? 'error' : null}
              />
              {touched.picture && errors.picture ? (
                <div className="error-message">{errors.picture}</div>
              ) : null}
            </Form.Group>

            <div className="w-md-75 mx-auto d-flex justify-content-center align-items-center mt-4">
              <Button variant="primary" type="submit" disabled={isSubmitting} className="w-50 mx-auto">
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  </section>
);

export default CreateRoom;
