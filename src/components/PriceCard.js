import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  -webkit-box-shadow: 16px 16px 8px 4px #000000;
  box-shadow: 3px 3px 3px 3px gray;
`;
const PriceContainer = styled.div``;
const Price = styled.span``;
const Type = styled.button``;
const List = styled.ul``;
const ListItem = styled.li``;
const Button = styled.button``;

export const PriceCard = () => {
  return (
    <Container>
      <PriceContainer>
        $<Price>20</Price>/month
        <Type>Basic Plan</Type>
        <List>
          <ListItem>200 Hand-Crafted Templates</ListItem>
          <ListItem>Exclusive Support</ListItem>
          <ListItem>50+ PreBuilt Websites</ListItem>
          <ListItem>Premium Plugins</ListItem>
          {""}
        </List>
        <Button>Join Now</Button>
      </PriceContainer>
    </Container>
  );
};

export default PriceCard;
