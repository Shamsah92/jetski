import React from "react";

import logo from "../logo.png";

import { ThemeButton, Logo, NavItem } from "../styles";
import SignupButton from "./Buttons/SignupButton";
import SigninButton from "./Buttons/SigninButton";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";
import { IoMdLogOut } from "react-icons/io";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <Logo to="/">
        <img alt="logo" src={logo} width="70" />
      </Logo>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          {authStore.user ? (
            <>
              <p>Welcome, {authStore.user.usernamer}</p>
              <IoMdLogOut
                onClick={authStore.signout}
                size="3em"
                color="green"
              />
            </>
          ) : (
            <>
              <SigninButton />
              <SignupButton />
            </>
          )}
          {authStore.user?.role === "admin" && (
            <>
              <NavItem className="nav-item" to="/factories">
                Factories
              </NavItem>
              <NavItem className="nav-item" to="/jetskis">
                jetskis
              </NavItem>
            </>
          )}

          <ThemeButton
            className="nav-item nav-link"
            href="#"
            onClick={props.handleTheme}
          >
            {props.buttonText}
          </ThemeButton>
        </div>
      </div>
    </nav>
  );
};

export default observer(NavBar);
