import React, { useState } from "react";
import styled from "styled-components";
import Man from "../images/Black-suite-man.png";
import MiniCard from "./MiniCard";
import Icon from "../images/play.png";

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const Left = styled.div`
  width: 50%;
  position: relative;
`;

const Image = styled.img`
  display: ${(props) => props.open && "none"};
  height: 100%;
  margin-left: 100px;
`;

const Video = styled.video`
  display: ${(props) => !props.open && "none"};
  height: 300px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  left: 0;
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

const Button = styled.button`
  width: 180px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  padding: 15px;
  margin-top: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

const Icon1 = styled.img`
  width: 20px;
  margin-right: 10px;
`;

export const Service = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Left>
        <Image open={open} src={Man} />
        <Video
          autoPlay
          loop
          controls
          open={open}
          src="https://player.vimeo.com/external/420568727.sd.mp4?s=bd4d6b75a5a1c960a222d3c9923574f70d122e0c&profile_id=165&oauth2_token_id=57447761"
        />
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
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </CardContainer>
          <Button onClick={() => setOpen(true)}>
            <Icon1 src={Icon} />
            How it Works
          </Button>
        </Wrapper>
      </Right>
    </Container>
  );
};

export default Service;
