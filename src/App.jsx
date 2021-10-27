import styled, { css } from "styled-components";
import Navbar from "./components/Navbar.js";
import Intro from "./components/Intro.js";
import Feature from "./components/Feature.js";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const IntoShape = styled.div`
  ${Shape}
  clip-path: polygon(79% 0, 100% 0, 100% 50%, 100% 100%, 58% 100%, 58% 24%);
  background-color: crimson;
  z-index: -1;
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0%, 33% 100%, 55% 100%);
  background-color: pink;
  z-index: -1;
`;

const App = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntoShape />
      </Container>
      <Container>
        <Feature />
        <FeatureShape />
      </Container>
    </>
  );
};

export default App;
