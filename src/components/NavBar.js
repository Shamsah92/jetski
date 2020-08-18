import React from "react";

import logo from "../logo.png";

import { ThemeButton, Logo, NavItem } from "../styles";
import SignupButton from "./Buttons/SignupButton";
import SigninButton from "./Buttons/SigninButton";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <Logo to="/">
        <img alt="logo" src={logo} width="70" />
      </Logo>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          {authStore.user ? (
            <p>Welcome, {authStore.user.usernamer}</p>
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

          {/* <NavItem
            className="nav-item nav-link"
            href="#"
            to="/factories"
            style={{ margin: 20, float: "right" }}
          >
            {" "}
            Factories
          </NavItem>

          <NavItem
            className="nav-item nav-link"
            href="#"
            to="/jetskis"
            style={{ margin: 20, float: "right" }}
          >
            {" "}
            jetskis
          </NavItem> */}

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
