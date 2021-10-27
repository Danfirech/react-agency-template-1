import React from "react";
import styled from "styled-components";
import search from "../images/search-icon.png";

const Container = styled.div`
  width: 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 16px 16px 8px 4px #000000;
  box-shadow: 16px 16px 8px 4px #000000;
  align-items: center;
`;

const Image = styled.img`
  width: 20px;
`;

const Text = styled.span`
  margin-top: 10px;
  text-align: center;
`;

const MiniCard = () => {
  return (
    <Container>
      <Image src={search} />
      <Text>This section needs to say something nice!</Text>
    </Container>
  );
};

export default MiniCard;
