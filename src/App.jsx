import styled from "styled-components";
import Navbar from "./components/Navbar.js";
import Intro from "./components/Intro.js";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const IntoShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(79% 0, 100% 0, 100% 50%, 100% 100%, 58% 100%, 58% 24%);
  background-color: crimson;
  z-index: -1;
`;

const App = () => {
  return (
    <Container>
      <Navbar />
      <Intro />
      <IntoShape />
    </Container>
  );
};

export default App;
