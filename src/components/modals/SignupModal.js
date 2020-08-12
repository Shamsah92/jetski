import React, { useState } from "react";
import Modal from "react-modal";

import { CreateButtonStyled } from "../../styles";
import authStore from "../../stores/authStore";

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

const SignupModal = ({ isOpen, closeModal }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  // const handleChange = (event) => {
  //   const newUser = { ...user, [event.target.name]: event.target.value };
  //   setUser(newUser);
  // };

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  // const handleImage = (event) =>
  //   setFactory({ ...factory, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signup(user);

    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyle}
      contentLabel="Signup Modal"
    >
      <h3>New User</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {/* <div className="col-6"> */}
          <label>User Name</label>
          <input
            required
            name="username"
            type="text"
            className="form-control"
            onChange={handleChange}
            value={user.username}
          />
        </div>
        <div className="form-group">
          {/* <div className="col-6"> */}
          <label>First Name</label>
          <input
            name="firstName"
            type="text"
            className="form-control"
            onChange={handleChange}
            value={user.firstName}
          />
        </div>
        <div className="form-group">
          {/* <div className="col-6"> */}
          <label>Last Name</label>
          <input
            name="lastName"
            type="text"
            className="form-control"
            onChange={handleChange}
            value={user.lastName}
          />
        </div>
        <div className="form-group">
          {/* <div className="col-6"> */}
          <label>Email</label>
          <input
            name="email"
            type="text"
            className="form-control"
            onChange={handleChange}
            value={user.email}
          />
        </div>
        <div className="form-group">
          {/* <div className="col-6"> */}
          <label>Password</label>
          <input
            required
            name="password"
            type="text"
            className="form-control"
            onChange={handleChange}
            value={user.password}
          />
        </div>

        <CreateButtonStyled className="btn float-right">
          Sign up
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default SignupModal;
