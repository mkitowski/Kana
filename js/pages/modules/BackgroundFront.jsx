import React, {useEffect, useState} from "react";
import styled, {ThemeProvider} from "styled-components";
import pic1 from "../../../assets/bacgrounds/pic1.jpg";
import pic2 from "../../../assets/bacgrounds/pic2.jpg";
import pic3 from "../../../assets/bacgrounds/pic3.jpg";
import pic4 from "../../../assets/bacgrounds/pic4.jpg";
// import { stat } from "fs";

const pictures = [pic1,pic2,pic3,pic4];

const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url(${props => pictures[props.theme.number]}) no-repeat center;
  background-size: cover;
  z-index: -1;
`

StyledBackground.defaultProps = {
  theme: {
    number: 0
  }
};

const theme = {
  number: 0
};

function BackgroundFront() {
  const [pic, setPic] = useState(1);

  useEffect(() => {
    const bckinterval = setInterval(() => {
      pic < 3 ? setPic(pic + 1) : setPic(0);
      theme[number] = pic;
    }, 3000);
    return () => {
      clearInterval(bckinterval);
    };
  });

  return (
    <ThemeProvider theme={theme}>
      <StyledBackground/>
    </ThemeProvider>
  );
}

export default BackgroundFront;
