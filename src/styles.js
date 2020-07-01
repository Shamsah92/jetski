import styled, { createGlobalStyle } from "styled-components";

// const styles = {
//   text: {
//     textAlign: "center",
//   },

//   jetImage1: {
//     display: "block",
//     marginLeft: "auto",
//     marginRight: "auto",
//   },
//   jetskiImage: {
//     with: "150px",
//     height: "150px",
//   },
//   jetskiList: {
//     alignItem: "center",
//     justifyContent: "center",
//     display: "flex",
//   },
//   jetskiMargin: {
//     margin: "20px",
//   },
// };

const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.blue};
`;

const Description = styled.h3`
  text-align: center;
  color: grey;
`;

const JetImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const ListWrap = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const JetsWrap = styled.div`
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

const GlobalStyle = createGlobalStyle`
body{ 
    color : ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
    text-align: center;
}
`;

const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  border-radius: 3px;
  bachground-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.backgroundColor};
  text-align: left;
`;

const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
`;

export {
  Description,
  Title,
  JetImage,
  ListWrap,
  JetsWrap,
  GlobalStyle,
  ThemeButton,
  DeleteButtonStyled,
};

// export default styles;
