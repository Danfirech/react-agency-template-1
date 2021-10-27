import styled from "styled-components";
import Navbar from "./components/Navbar.js";
import Intro from "./components/Intro.js";

const Container = styled.div`
  height: 100vh;
`;

const App = () => {
  return (
    <Container>
      <Navbar />
      <Intro />
    </Container>
  );
};

export default App;
