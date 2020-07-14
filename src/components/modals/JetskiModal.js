import React, { useState } from "react";
import Modal from "react-modal";

import { CreateButtonStyled } from "../../styles";

const customStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate (-50%, -50%)",
  },
};

const JetskiModal = ({ isOpen, closeModal, createJetski }) => {
  const [jetski, setJetski] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
  });

  const handleChange = (event) => {
    setJetski({ ...jetski, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(jetski);
    createJetski(jetski);
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyle}
      contentLabel="Jetski Modal"
    >
      <h3>New Jetski</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label>Price</label>
            <input
              name="name"
              type="number"
              min="500"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            name="description"
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            name="image"
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <CreateButtonStyled className="btn float-right">
          Create
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default JetskiModal;
