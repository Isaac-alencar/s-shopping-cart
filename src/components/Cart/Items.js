import styled from "styled-components";
import { Text } from "../Text";

const ActionButtons = () => {
  return (
    <ButtonsContainer>
      <button>
        <i class="lni lni-plus"></i>
      </button>
      <button>
        <i class="lni lni-minus"></i>
      </button>
    </ButtonsContainer>
  );
};

export const Item = (props) => {
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
      <ActionButtons />
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
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
const Quantity = styled(Text)`
  grid-area: quantity;
  color: #333;
`;
const Price = styled(Text)`
  grid-area: price;
  justify-self: flex-end;
  color: #333;
`;
const ButtonsContainer = styled.div`
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
