import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: url("https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png");
  height: 90%;
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  width: 50%;
`;

const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftForm = styled.div``;
const RightForm = styled.div``;

const AddressContainer = styled.div`
  width: 50%;
`;

export const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>Form</FormContainer>
        <AddressContainer>AAAA</AddressContainer>
      </Wrapper>
    </Container>
  );
};
