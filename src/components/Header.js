import styled from "styled-components";
import { Text } from "./Text";

export const Header = () => {
  return (
    <Container>
      <Text as="h1" fontSize="2rem" fontWeight="bold">
        Shopping
      </Text>
      <UserInfo>
        <Avatar />
        <Text fontSize="1rem" fontWeight="semibold">
          John Doe
        </Text>
      </UserInfo>
    </Container>
  );
};

const Container = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #d8d8d8;
`;

const UserInfo = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.div`
  background-color: #666;
  width: 30px;
  height: 30px;
  min-height: 30px;
  min-width: 30px;
  border-radius: 100%;
`;
