import styled from "styled-components";

export default function Keying() {
  return (
    <Container>
      {/*<RoundOfSixteen></RoundOfSixteen>
      <Quarterfinals></Quarterfinals>
      <Semi></Semi>
      <Finals></Finals>
      <Semi></Semi>
      <Quarterfinals></Quarterfinals>
      <RoundOfSixteen></RoundOfSixteen>*/}
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 300px;

  display: flex;

  margin: 20px;

  background-color: rgba(0, 0, 0, 0.5);
`;

const RoundOfSixteen = styled.div`
  width: 100%;
  height: 100%;

  background-color: blue;
`;
const Quarterfinals = styled.div`
  width: 100%;
  height: 100%;

  background-color: red;
`;
const Semi = styled.div`
  width: 100%;
  height: 100%;

  background-color: green;
`;
const Finals = styled.div`
  width: 100%;
  height: 100%;

  background-color: yellow;
`;
