import React from "react";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 50%;
`;

const Right = styled.div`
  width: 50%;
`;

export const Service = () => {
  return (
    <Container>
      <Left></Left>
      <Right></Right>
    </Container>
  );
};
