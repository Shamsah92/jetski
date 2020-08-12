import styled from "styled-components";

export const AuthButtonStyled = styled.button`
  font-size: 1em;
  padding: 0.1em 1em;
  margin-right: 0.5em;
  border-radius: 1px;
  background-color: ${(props) => props.theme.mainColor};

  color: ${(props) => props.theme.backgroundColor};
`;
