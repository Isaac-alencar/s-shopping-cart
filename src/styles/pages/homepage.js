import styled from "styled-components";

export const Container = styled.div`
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

export const Header = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #d8d8d8;
`;

export const UserInfo = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

export const Avatar = styled.div`
  background-color: #666;
  width: 30px;
  height: 30px;
  min-height: 30px;
  min-width: 30px;
  border-radius: 100%;
`;

export const ProductList = styled.div`
  grid-area: products-list;
  display: grid;
  grid-template-columns: repeat(3, 12.5rem);
  gap: 1.5rem;
  padding: 3rem 2rem;

  height: fit-content;
`;
