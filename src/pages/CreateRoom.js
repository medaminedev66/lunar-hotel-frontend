import React from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './createroom.css';
import { Container, Form, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { addRoom } from '../redux/rooms/rooms';
import NavPanel from '../components/NavPanel';
import lunar from '../images/lunar.png';

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

  amenities: Yup.string()
    .required('*Amenity is required'),

  picture: Yup.string()
    .required('*Picture is required'),
});

const CreateRoom = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <section className="form-container">
      <div className="overlap">
        <div className="nav">
          <img src={lunar} className="lunar-logo" alt="Lunar Hotel Logo" />
          <NavPanel />
        </div>
        <Container className="my_container">
          <Formik
            initialValues={{
              name: '',
              city: '',
              rate: 0,
              room_type: '',
              amenities: '',
              picture: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              dispatch(addRoom(values));
              setSubmitting(false);
              resetForm();
              navigate('/');
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
                  <Form.Select
                    aria-label="Select Hotel City Field"
                    name="city"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.city}
                    className={touched.city && errors.city ? 'error' : null}
                  >
                    <option>Select Hotel City</option>
                    <option value="Lusaka">Lusaka</option>
                    <option value="Abuja">Abuja</option>
                    <option value="Lagos">Lagos</option>
                    <option value="Morocco">Morocco</option>
                  </Form.Select>
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
                    <option value="Single">Single</option>
                    <option value="Double">Double</option>
                    <option value="Mini Suite">Mini Suite</option>
                    <option value="Master Suite">Master Suite</option>
                    <option value="Executive Suite">Executive Suite</option>
                    <option value="Presidential Suite">Presidential Suite</option>
                  </Form.Select>

                  {touched.room_type && errors.room_type ? (
                    <div className="error-message">{errors.room_type}</div>
                  ) : null}
                </Form.Group>

                <Form.Group controlId="formBasicAmenities" className="col mb-3">
                  <Form.Label>Choose An Amenity</Form.Label>
                  <Form.Control
                    type="text"
                    name="amenities"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.amenities}
                    className={touched.amenities && errors.amenities ? 'error' : null}
                  />
                  {touched.amenities && errors.amenities ? (
                    <div className="error-message">{errors.amenities}</div>
                  ) : null}
                </Form.Group>

                <Form.Group controlId="formBasicFile" className="col mb-3">
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
                  {
                    isSubmitting
                      ? (
                        <button className="btn btn-primary" type="button" disabled>
                          <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />
                          Loading...
                        </button>
                      )
                      : (
                        <Button type="submit" disabled={isSubmitting} className="w-50 mx-auto room-btn">
                          Submit
                        </Button>
                      )
                }
                </div>
              </Form>
            )}
          </Formik>
        </Container>
      </div>
    </section>
  );
};

export default CreateRoom;
