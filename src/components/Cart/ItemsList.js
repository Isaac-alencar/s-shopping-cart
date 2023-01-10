import styled from "styled-components";

import { Item } from "./Items";

export const ItemsList = (props) => {
  return (
    <Container>
      {props.products.map((p) => {
        return <Item name={p.name} price={p.price} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding: 2rem 2rem 0;
`;
