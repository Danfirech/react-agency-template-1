import React from "react";
import styled from "styled-components";
import HandPhone from "../images/Iphone-nobackground-png.png";
import AnimatedShapes from "./AnimatedShapes.js";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 50%;
`;

const Image = styled.img`
  width: 100%;
  height: 90%;
`;

const Title = styled.span`
  font-size: 70px;
`;
const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
`;

const Description = styled.p`
  font-size: 20px;
  color: 777;
  margin-top: 30px;
`;
const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
`;

export const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={HandPhone} />
      </Left>
      <Right>
        <Title>
          <b>Good</b> Design
          <br />
          <b>Good</b> Business
        </Title>
        <SubTitle>We know that good deign means good business</SubTitle>
        <Description>
          We help our clients succeed by creating brand identities, designs,
          experiences, and print materials that communicate clearly and look
          fantastic
        </Description>
        <Description>
          We care about your business and want to help you acheive your goals!
        </Description>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Feature;
