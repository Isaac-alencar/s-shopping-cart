import styled from "styled-components";
import { Text } from "./Text";

const Item = (props) => {
  return (
    <ItemContainer>
      <Image src="https://placekitten.com/g/90" alt="Kitty" />
      <Description>
        <Name fontSize="1.2rem" fontWeight="bold">
          {props.name}
        </Name>
        <Quantity>Quantity: {props.quantity}</Quantity>
        <Price>$ {props.price}</Price>
      </Description>
      <ActionButtons>
        <button>
          <i class="lni lni-plus"></i>
        </button>
        <button>
          <i class="lni lni-minus"></i>
        </button>
      </ActionButtons>
    </ItemContainer>
  );
};

export const Checkout = () => {
  return (
    <Container>
      <ItemsList>
        <Item price={40} quantity={4} name="banana" />
        <Item price={40} quantity={4} name="banana" />
      </ItemsList>
      <DiscountContainer>
        <Input type="text" placeholder="Discount code" />
        <Button>Apply</Button>
      </DiscountContainer>
    </Container>
  );
};

export const Container = styled.div`
  grid-area: checkout;
  min-width: 32rem;
  margin: 3rem 2rem;
  padding: 2rem;
  background-color: #d8d8d8;
  border-radius: 12px;
`;

// Items on cart
const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;
const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  /* background-color: red; */
  border: 0.1px solid #9999;
  border-radius: 6px;
`;
const Image = styled.img`
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`;
const Description = styled.div`
  display: grid;
  grid-template-areas:
    "name name"
    "quantity price";
  grid-template-columns: auto 1fr;
  width: 100%;
  padding: 0.75rem 0.5rem;
  grid-row-gap: 0.5rem;
`;
const Name = styled(Text)`
  grid-area: name;
  color: #333;
`;
const Quantity = styled.div`
  grid-area: quantity;
  color: #333;
`;
const Price = styled(Text)`
  grid-area: price;
  justify-self: flex-end;
  color: #333;
`;
const ActionButtons = styled(Text)`
  display: flex;
  flex-direction: column;
  border-left: 0.1px solid #9999;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;

  button {
    flex: 0.5;
    border: 0;
    width: 3.125rem;
    background-color: transparent;
    cursor: pointer;
  }

  button:nth-child(1) {
    border-bottom: 0.1px solid #9999;
    border-top-right-radius: inherit;
  }

  button:nth-child(2) {
    border-bottom-right-radius: inherit;
  }
`;

// Discount
const DiscountContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem 0;
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
`;