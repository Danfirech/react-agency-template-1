import React from "react";
import styled from "styled-components";
import Map from "../images/map.png";
import Phone from "../images/phone-icon.png";
import Send from "../images/send.png";

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

const Title = styled.h1`
  margin: 126px;
  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: 25px;
`;

const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
`;
const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 200px;
  padding: 20px;
`;

const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 20px;
`;

const Button = styled.button`
  background-color: darkblue;
  color: white;
  font-size: 16px;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
`;

const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddressItem = styled.div`
  display: flex;
  align-items: center;
`;

export const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Questions? <br /> Let's Get In Touch
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder="Your Name" />

              <Input placeholder="Your Email" />

              <Input placeholder="Subject" />
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Your Message" />
              <Button>SUBMIT</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer></AddressContainer>
      </Wrapper>
    </Container>
  );
};
