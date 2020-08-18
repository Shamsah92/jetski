import React from "react";

import { Description, Title, JetImage } from "../styles";
import authStore from "../stores/authStore";
import { Redirect } from "react-router";

const Home = () => {
  if (!authStore.user) return <Redirect to="/signin" />;
  return (
    <>
      <Title> Jet Ski</Title>
      <Description>Top of the line Jet Ski</Description>
      <JetImage
        src="https://i.pinimg.com/474x/85/f9/59/85f959846423744530c10374699535b1--jet-ski-wallpaper-desktop.jpg"
        alt="jet store"
      />
    </>
  );
};

export default Home;
