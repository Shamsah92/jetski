import styled, { createGlobalStyle } from "styled-components";

import { Link, NavLink } from "react-router-dom";

export const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.blue};
`;

export const Description = styled.h3`
  text-align: center;
  color: grey;
`;

export const JetImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const ListWrap = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const JetsWrap = styled.div`
  margin: 20px;

  img{
       200px;
height: 200px;
}

p{
    taxt-align: Center;

    &.jet-a{
        color: ${(props) => props.theme.blue};
}
`;

export const DetailWrap = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export const GlobalStyle = createGlobalStyle`
body{ 
    color : ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
    text-align: center;
}
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1em;
  border-radius: 3px;
  bachground-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.backgroundColor};
  text-align: left;
`;

export const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
`;

export const SearchBarStyled = styled.input`
  color: ${(props) => props.theme.red};
  font-size: 1em;
  padding: 1rem;
  margin: 2rem auto;
  display: flex;
`;

export const Logo = styled(Link)`
  padding: 0.55em;

  img {
    width: 6rem;
  }
`;

export const NavItem = styled(NavLink)`
  padding: 0.25em 1em;
  color: ${(props) => props.theme.blue};

  &.active {
    color: ${(props) => props.theme.red};
  }
`;
