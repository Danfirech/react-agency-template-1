import React from "react";
import styled from "styled-components";
import Woman from "../images/Woman.png";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 60px;
  width: 40%;
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
`;

const Info = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  font-weight: bold;
`;

const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  letter-spacing: 2px;
  cursor: pointer;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
`;

const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;

const Right = styled.div`
  right: 40%;
`;

const Image = styled.img`
  width: 100%;
  padding-left: 65px;
  padding-top: 50px;
  clip-path: polygon(51% 0, 80% 0, 81% 53%, 82% 100%, 21% 100%, 20% 11%);
`;

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Adventures in creative age</Title>
        <Desc>
          We believe that createing and designing products and services in close
          partnership with our clients is the only way to have a real impact on
          their buisness{" "}
        </Desc>
        <Info>
          <Button>START A PROJECT</Button>

          <Contact>
            <Phone>Call us (616) 821 0139</Phone>
            <ContactText>For any questions or concerns</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={Woman} />
      </Right>
    </Container>
  );
};

export default Intro;
