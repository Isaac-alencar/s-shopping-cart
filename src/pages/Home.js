import styled from "styled-components";

import { ProductsList } from "../components/ProductList";
import { Cart } from "../components/Cart";
import { Header } from "../components/Header";

const HomePage = () => {
  return (
    <Container>
      <Header />
      <ProductsList />
      <Cart />
    </Container>
  );
};

const Container = styled.div`
  color: white;
  font-family: sans-serif;
  height: 100%;

  display: grid;
  grid-template-areas:
    "header header"
    "products-list checkout";
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr;
`;

export { HomePage };
