import styled from "styled-components";

import { Text } from "../Text";

export const Card = (props) => {
  return (
    <Container>
      <Image>
        <img src="https://placekitten.com/g/200" alt="Kitty" />
      </Image>
      <Description>
        <Text fontWeight='bold' fontSize='1.2rem'>{props.name}</Text>
        <Text>$ {props.price} · 2 left</Text>
      </Description>
      <Button>BUY</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #efefef;

  width: 100%;
  border-radius: 12px;
`;

const Image = styled.picture`
  width: 100%;
  height: 200px;
  border-radius: 12px;
  img {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
`;

const Description = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
`;

const Button = styled.button`
  width: 100%;
  border: 0;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
  padding: 0.5rem 1rem;
  background-color: #333;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 100ms ease-in-out;

  &:hover {
    background-color: #222;
  }
`