import styled from "styled-components";

import { Text } from "../Text";

export const OrderResume = (props) => {
  return (
    <>
      {props.orderInfo &&
        props.orderInfo.map((o) => {
          return (
            <Container>
              <Text>{o.info}</Text>
              <Text>$ {o.value}</Text>
            </Container>
          );
        })}
    </>
  );
};

const Container = styled.div`
  padding: 1.6rem 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-top: 0.1px solid #9999;

  &:last-child {
    font-weight: 700;
  }

`;
