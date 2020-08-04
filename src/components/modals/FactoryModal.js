import React, { useState } from "react";
import Modal from "react-modal";

import { CreateButtonStyled } from "../../styles";

import factoryStore from "../../stores/factoryStore";

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

const FactoryModal = ({ isOpen, closeModal, oldFactory }) => {
  const [factory, setFactory] = useState(
    oldFactory || {
      name: "",

      image: "",
    }
  );

  const handleChange = (event) => {
    setFactory({ ...factory, [event.target.name]: event.target.value });
  };

  const handleImage = (event) =>
    setFactory({ ...factory, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();

    factoryStore[oldFactory ? "updateFactory" : "createFactory"](factory);

    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyle}
      contentLabel="Factory Modal"
    >
      <h3>New Factory</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {/* <div className="col-6"> */}
          <label>Name</label>
          <input
            required
            name="name"
            type="text"
            className="form-control"
            onChange={handleChange}
            value={factory.name}
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
          {oldFactory ? "Update" : "Create"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default FactoryModal;
