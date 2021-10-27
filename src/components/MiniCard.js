import React from "react";
import styled from "styled-components";

const Container = styled.div`
width: 100px;
padding:20px;
display: flex;
flex-direction: column;
`

const Image = styled.img`
width: 20px;
`

const Text = styled.span`

`

const MiniCard = () => {
  return <Container>

    <Image >
      <Text>

        This section needs to say something nice! 
      </Text>

  </Container>
};

export default MiniCard;
