import styled from "styled-components";
import Group from "./Group";
import groups from "../assets/content/groups";

export default function GroupGrid({ setClassified, classified }) {
  const groupsArray = Object.keys(groups);
  return (
    <>
      <Title>Selecione os 1ᵒˢ, 2ᵒˢ e 3ᵒˢ colocados</Title>
      <Container>
        {groupsArray.map((group, i) => (
          <Group
            key={i}
            name={group}
            group={groups[group]}
            classified={classified}
            setClassified={setClassified}
          ></Group>
        ))}
      </Container>
    </>
  );
}

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const Container = styled.div`
  color: white;

  margin: 20px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 20px;

  justify-content: center;
`;
