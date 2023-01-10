import styled from "styled-components";

import { OrderResume } from "./OrderResume";
import { ItemsList } from "./ItemsList";

import { Text } from "../Text";

export const Cart = () => {
  return (
    <Container>
      <Content>
        <Title>
          <Text fontSize="2rem" fontWeight="bold">
            Shopping Cart
          </Text>
        </Title>

        <ItemsList
          products={[
            { id: 1, name: "Banana", price: 10.0, available: 10 },
            { id: 2, name: "Apple", price: 20.0, available: 15 },
          ]}
        />

        <DiscountContainer>
          <Input type="text" placeholder="Discount code" />
          <Button>Apply</Button>
        </DiscountContainer>

        <OrderResume
          orderInfo={[
            { info: "Subtotal", value: 230.0 },
            { info: "Shipping", value: 30.0 },
            { info: "Discount", value: 10.0 },
            { info: "Subtotal", value: 230.0 },
          ]}
        />
      </Content>
      <CheckoutButton>Checkout</CheckoutButton>
    </Container>
  );
};

const Container = styled.div`
  grid-area: checkout;
  min-width: 32rem;
  margin: 3rem 2rem;
`;
const Content = styled.div`
  background-color: #d8d8d8;
  border-radius: 12px;
  height: fit-content;
  margin-bottom: 2rem;
`;
// TitleContainer
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  background-color: #999999;

  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
`;
// Discount
const DiscountContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem;
`;
const Input = styled.input`
  width: 100%;
  height: 45px;
  border: 0;
  border-radius: 3px;
  padding-left: 0.8rem;
  &::placeholder {
    font-size: 0.9rem;
  }
`;
const Button = styled.button`
  border: 0;
  border-radius: 6px;
  width: 150px;
  font-size: 1rem;
  font-weight: bold;
  background-color: #333;
  color: #fff;

  cursor: pointer;
`;
const CheckoutButton = styled.button`
  border: 0;
  border-radius: 12px;
  width: 100%;
  padding: 1.4rem;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: #333;
  color: #fff;

  text-transform: uppercase;

  cursor: pointer;
`;
