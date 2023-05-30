import styled from "styled-components";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";

const ContainerUI = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  font-size: 18px;
  font-weight: 400;

  @media (max-width: 1300px) {
    flex-direction: column;
  }
`;

const ColumnUI = styled.form`
  width: calc(100% / 7 * 2);

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  font-size: 18px;
  font-weight: 400;

  @media (max-width: 1300px) {
    width: 100%;
  }
`;

const HeaderUI = styled.div`
  width: 100%;
  font-size: 36px;
  font-weight: 900;

  margin: 0 0 25px 0;
`;

const TextUI = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 400;
`;

const FormUI = styled.form`
  width: calc(100% / 7 * 3);

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  font-size: 18px;
  font-weight: 400;

  @media (max-width: 1300px) {
    width: 100%;
    margin: 100px 0 0 0;
  }
`;

const LabelUI = styled.div`
  width: 100%;
  font-size: 24px;
  font-weight: 500;
`;

const InputUI = styled.input`
  border-radius: 0;
  -webkit-appearance: none;
  width: 100%;
  padding: 50px 0 10px 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: 16px;
  font-weight: 400;
  margin: 25px 0 50px 0;
  border: none;
  outline: none;
  border-bottom: 1px solid black;

  background: transparent;

  color: ${(props) => props.color.secondary};

  border-bottom: 1px solid ${(props) => props.color.secondary};

  @media (max-width: 1300px) {
    width: calc(100% / 7 * 4);
  }

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const ButtonUI = styled.button`
  width: calc(100% / 3 * 1);
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  margin: 25px 0 50px 0;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  cursor: pointer;

  background: ${(props) => props.color.primary};

  color: ${(props) => props.color.secondary};

  border: 1px solid ${(props) => props.color.secondary};

  @media (max-width: 800px) {
    width: 50%;
  }

  &:hover {
    background: ${(props) => props.color.secondary};

    color: ${(props) => props.color.primary};
  }
`;

export default function ContactForm({ dark, setDark, color }) {

  const sendEmail = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);


    emailjs
      .sendForm(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        e.target,
        "user_rKb8FhbgHefKWYYTkB8q0"
      )
      .then(
        (result) => {
    
        },
        (error) => {
   
        }
      );
  };

  return (
    <ContainerUI>
      <ColumnUI>
        <HeaderUI>Get in touch.</HeaderUI>

        <TextUI>Contact us for inquiries.</TextUI>
      </ColumnUI>

      <FormUI onSubmit={sendEmail}>
        <LabelUI>Your Name</LabelUI>

        <InputUI
          color={color}
          type="text"
          placeholder="Name"
          name="user_name"
        />

        <LabelUI>Your Email</LabelUI>

        <InputUI
          color={color}
          type="text"
          name="user_email"
          placeholder="Email"
        />

        <LabelUI>Your Message</LabelUI>

        <InputUI
          color={color}
          type="text"
          name="message"
          placeholder="Your Message"
        />

        <ButtonUI color={color} type="submit">
          Send
        </ButtonUI>
      </FormUI>
    </ContainerUI>
  );
}
