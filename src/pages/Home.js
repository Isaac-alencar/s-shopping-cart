import {
  Avatar,
  Container,
  Header,
  ProductList,
  UserInfo,
} from "../styles/pages/homepage";
import { Text } from "../components/Text";
import { ProductCard } from "../components/ProductCard";
import { Checkout } from "../components/Checkout";

const HomePage = () => {
  return (
    <Container>
      <Header>
        <Text as="h1" fontSize="2rem" fontWeight="bold">
          Shopping
        </Text>
        <UserInfo>
          <Avatar />
          <Text fontSize="1rem" fontWeight="semibold">
            John Doe
          </Text>
        </UserInfo>
      </Header>
      <ProductList>
        {[...Array(6)].map((i, idx) => {
          return (
            <ProductCard
              key={`product-${idx}`}
              name="Banana"
              price={4 * idx + 1}
            />
          );
        })}
      </ProductList>
      <Checkout />
    </Container>
  );
};

export { HomePage };
