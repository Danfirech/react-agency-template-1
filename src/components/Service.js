import React from "react";
import styled from "styled-components";
import Man from "../images/man-ipad.png";
import MiniCard from "./MiniCard";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 50%;
`;

const Image = styled.img`
  height: 100%;
  margin-left: 100px;
`;

const Right = styled.div`
  width: 50%;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1``;
const Description = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: 555;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

export const Service = () => {
  return (
    <Container>
      <Left>
        <Image src={Man} />
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple process to start</Title>
          <Description>
            We provide digital experiences and services to startups and small
            businesses looking for a partner to design and develop lead
            generation and beutiful websites.
          </Description>
          <CardContainer>
            <MiniCard>Let us show you!</MiniCard>
            <MiniCard>Let us show you!</MiniCard>
            <MiniCard>Let us show you!</MiniCard>
          </CardContainer>
        </Wrapper>
      </Right>
    </Container>
  );
};

export default Service;
