import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import {useSelector, useDispatch} from 'react-redux'
import { createRequest } from "../features/request/requestSlice";

const RequestForm = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    name: "",
    phone: "",
    address: "",
  });

  const { title, description, name, phone, address } = formData;

  const disptach = useDispatch()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };


  const onSubmit = (e) => {
    e.preventDefault()

    const requestData = {
      title, 
      description, 
      name, 
      phone, 
      address 
    }

    disptach(createRequest(requestData))
    handleClose()
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create Request
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                required="true"
                id="title"
                name="title"
                value={title}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
             
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                type="text"
                required
                id="description"
                name="description"
                value={description}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                required
                id="name"
                name="name"
                value={name}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                required
                id="phone"
                name="phone"
                value={phone}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                required
                id="address"
                name="address"
                value={address}
                onChange={onChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={onSubmit}>
            Send Request
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RequestForm;
