import React, { useState } from "react";
import Modal from "react-modal";

import { CreateButtonStyled } from "../../styles";

import jetskiStore from "../../stores/jetskiStore";

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

const JetskiModal = ({ factoryId, isOpen, closeModal, oldJetski }) => {
  const [jetski, setJetski] = useState(
    oldJetski || {
      factoryId,
      name: "",
      price: 0,
      description: "",
      image: "",
    }
  );

  const handleChange = (event) => {
    setJetski({ ...jetski, [event.target.name]: event.target.value });
  };

  const handleImage = (event) =>
    setJetski({ ...jetski, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();

    jetskiStore[oldJetski ? "updateJetski" : "createJetski"](jetski);

    closeModal();
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
              required
              name="name"
              type="text"
              className="form-control"
              onChange={handleChange}
              value={jetski.name}
            />
          </div>
          <div className="col-6">
            <label>Price</label>
            <input
              name="price"
              type="number"
              className="form-control"
              onChange={handleChange}
              min="500"
              value={jetski.price}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            required
            name="description"
            type="text"
            className="form-control"
            onChange={handleChange}
            value={jetski.description}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            required
            name="image"
            type="file"
            className="form-control"
            onChange={handleImage}
          />
        </div>
        <CreateButtonStyled className="btn float-right">
          {oldJetski ? "Update" : "Create"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default JetskiModal;
