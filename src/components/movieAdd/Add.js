import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./Add.css";

const Add = ({ handleAdd }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newMovie, SetNewMovie] = useState({
    title: "",
    Url: "",
    date: "",
    duration: "",
    rating: "",
    description: "",
  });

  const add = () => {
    handleAdd(newMovie);
    empty();
  };
  const empty = () => {
    SetNewMovie({
      title: "",
      Url: "",
      date: "",
      duration: "",
      rating: "",
      description: "",
    });
    handleClose();
  };

  const change = (e) => {
    SetNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add a movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a movie</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modall">
          <label htmlFor="Title">Title</label>
          <input type="text" name="title" onChange={change} />
          <label htmlFor="Date">Date</label>
          <input type="text" name="date" onChange={change} />
          <label htmlFor="Duration">Duration</label>
          <input type="text" name="duration" onChange={change} />
          <label htmlFor="description"> Description</label>
          <input type="text" name="description" onChange={change} />
          <label htmlFor="Rating">Rating</label>
          <input type="text" name="rating" onChange={change} />
          <label htmlFor="Image">Image</label>
          <input type="text" name="Url" onChange={change} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={add}>
            ADD Movie
          </Button>
          <Button variant="primary" onClick={empty}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Add;
