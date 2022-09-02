import styled from "styled-components";
import { useState } from "react";

import GroupGrid from "./components/GroupGrid";
import Keying from "./components/Keying";
import background from "./assets/images/background.jpg";
import logo from "./assets/images/logo.png";

export default function App() {
  const [classified, setClassified] = useState({
    A: [],
    B: [],
    C: [],
    D: [],
    E: [],
    F: [],
    G: [],
    H: [],
  });

  return (
    <Container background={background}>
      <img src={logo} alt="logo" />
      <GroupGrid setClassified={setClassified} classified={classified}></GroupGrid>
      <Keying classified={classified}></Keying>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(${(props) => props.background});
  background-position: center;
  background-size: cover;

  color: white;

  img {
    width: 400px;

    margin: 20px 0 80px 0;

    border-radius: 10px;
  }
`;
