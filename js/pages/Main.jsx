import React from "react";
import styled from "styled-components";

import Menu from "./modules/Menu.jsx";
import BackgroundFront from "./modules/BackgroundFront.jsx";

const MenuBar = styled.div`
  width: 100vw;
  height: 2rem;
  background: rgba(0, 0, 0, 0.3);
  color: white;
  padding-top: 0.5rem;
  ul {
    list-style: none;
    display: flex;
    li {
      padding: 0 0.2rem 0 0.2rem;
      cursor: pointer;
      transition: 0.3s color ease-in-out, 0.3s font-weight ease-in-out;
      :hover {
        font-weight: 300;
        color: blue;
      }
    }
  }
`;

function Main() {
  return (
    <div>
      <BackgroundFront />
      <MenuBar>
        <Menu />
      </MenuBar>
    </div>
  );
}

export default Main;
