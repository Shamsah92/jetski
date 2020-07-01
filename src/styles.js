import styled from "styled-components";

const styles = {
  text: {
    textAlign: "center",
  },

  jetImage1: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  jetskiImage: {
    with: "150px",
    height: "150px",
  },
  jetskiList: {
    alignItem: "center",
    justifyContent: "center",
    display: "flex",
  },
  jetskiMargin: {
    margin: "20px",
  },
};

const Title = styled.h1`
  text-align: center;
  color: blue;
`;

const Description = styled.h3`
  text-align: center;
  color: grey;
`;

const jetImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const ListWrap = styled.div`
  align-item: center;
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
    taxt-align: Left;

    &.jet-a{
        color: red;
    }
}
`;

export { Description, Title, jetImage, ListWrap, JetsWrap };

export default styles;
