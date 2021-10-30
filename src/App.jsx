import styled, { css } from "styled-components";
import Navbar from "./components/Navbar.js";
import Intro from "./components/Intro.js";
import Feature from "./components/Feature.js";
import Service from "./components/Service.js";
import Price from "./components/Price.js";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

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
  clip-path: polygon(84% 0, 100% 0, 100% 100%, 55% 100%);
  background-color: #f1f1f2;
  z-index: -1;
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0, 23.4% 100%, 0 100%);
  background-color: #a1d6e2;
  z-index: -1;
`;

const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 23.4% 0, 66% 100%, 0 100%);
  background-color: #bcbabe;
  z-index: -1;
`;

const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(66% 0, 100% 0, 100% 100%, 0 100%);
  background-color: #1995ad;
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
      <Container>
        <Service />
        <ServiceShape />
      </Container>
      <Container>
        <Price />
        <PriceShape />
      </Container>
      <Container>
        <Contact />
        <Footer />
      </Container>
    </>
  );
};

export default App;
