import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 10%;
  background: url("https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png");
  color: lightgray;
`;
const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;
const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`;

const Listitem = styled.li`
  margin-right: 20px;
`;

const Copyright = styled.span``;

export const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <Listitem>Guide</Listitem>
          <Listitem>Support</Listitem>
          <Listitem>Api</Listitem>
          <Listitem>Community</Listitem>
        </List>

        <Copyright>ND Design</Copyright>
      </Wrapper>
    </Container>
  );
};
