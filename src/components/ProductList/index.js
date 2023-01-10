import styled from "styled-components";

import { Card } from "./Card";

export const ProductsList = () => {
  const arr = [...Array(6)];
  return (
    <Container>
      {arr.map((i, idx) => {
        return (
          <Card
            name="Banana"
            price={`${idx + 1 * i}`}
            key={`product-${idx + 1}`}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  grid-area: products-list;
  display: grid;
  grid-template-columns: repeat(3, 12.5rem);
  gap: 1.5rem;
  padding: 3rem 2rem;

  height: fit-content;
`;