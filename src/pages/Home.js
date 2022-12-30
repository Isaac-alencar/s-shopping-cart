import { Text } from "../styles/components/Text";
import { Container } from "../styles/pages/homepage";

import { useCounter } from "../store/domain/counter";

const HomePage = () => {

  const { increment, counter } = useCounter();

  return (
    <Container>
      <button style={{ display: "block" }} onClick={increment}>
        Increase
      </button>
      <Text>Hello World, {counter}</Text>
    </Container>
  );
};

export { HomePage };
