import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Formik } from 'formik';
import { Form, Button, Offcanvas } from 'react-bootstrap';
import * as Yup from 'yup';
import './addReservation.css';

const validationSchema = Yup.object().shape({

  city: Yup.string()
    .min(2, '*City must have at least 2 characters')
    .max(25, '*City can\'t be longer than 25 characters')
    .required('*City is required'),

  check_in: Yup.date().required('*Check In date is required'),
  check_out: Yup.date().required('*Check Out date is required'),
});

const AddReservation = () => {
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

            <Formik
              initialValues={{
                city: '',
                check_in: '',
                check_out: '',
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                // dispatch(addRoom(values));
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
                <Form onSubmit={handleSubmit} class="d-flex">
                  <Form.Group controlId="formCity">
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

                  <Form.Group controlId="FormCheckIn">
                    <Form.Label>Check In</Form.Label>
                    <Form.Control
                      type="date"
                      name="check_in"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.rate}
                      className={touched.check_in && errors.check_in ? 'error' : null}
                    />
                    {touched.check_in && errors.check_in ? (
                      <div className="error-message">{errors.check_in}</div>
                    ) : null}
                  </Form.Group>

                  <Form.Group controlId="FormCheckIn">
                    <Form.Label>Check Out</Form.Label>
                    <Form.Control
                      type="date"
                      name="check_out"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.check_out}
                      className={touched.check_out && errors.check_out ? 'error' : null}
                    />
                    {touched.check_out && errors.check_out ? (
                      <div className="error-message">{errors.check_out}</div>
                    ) : null}
                  </Form.Group>

                  <Button type="submit" disabled={isSubmitting} className="upperCase resBtn">
                    Add reservation
                  </Button>
                </Form>
              )}
            </Formik>
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

export default AddReservation;
