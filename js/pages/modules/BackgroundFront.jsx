import React from "react";
import styled from "styled-components";
import pic1 from "../../../assets/bacgrounds/pic1.jpg";
import pic2 from "../../../assets/bacgrounds/pic2.jpg";
import pic3 from "../../../assets/bacgrounds/pic3.jpg";
import pic4 from "../../../assets/bacgrounds/pic4.jpg";

const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url(${pic1}) no-repeat center;
  background-size: cover;
  z-index: -1;
`

function BackgroundFront() {
  return <StyledBackground/>
}

export default BackgroundFront;