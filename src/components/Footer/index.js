import React from "react";
import {
  FooterBox,
  FooterContainer,
  FooterButtonContainer,
  FooterButton,
  FooterH3,
} from "./FooterElements";
import { AiFillAndroid } from "react-icons/ai";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterBox>
        <FooterH3>Running out of products?</FooterH3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima,
          enim!
        </p>
        <FooterButtonContainer>
          <FooterButton>Buy now {">"}</FooterButton>
        </FooterButtonContainer>
      </FooterBox>
      <FooterBox>
        <FooterH3>Body-e Trainer in your pocket</FooterH3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
          quia?
        </p>
        <FooterButtonContainer>
          <FooterButton>iOS {">"}</FooterButton>
          <FooterButton>
            <AiFillAndroid />
            Android {">"}
          </FooterButton>
        </FooterButtonContainer>
      </FooterBox>
      <FooterBox>
        <FooterH3>Frequently Asked Questions</FooterH3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          sit!
        </p>
        <FooterButtonContainer>
          <FooterButton>Read FAQs {">"}</FooterButton>
        </FooterButtonContainer>
      </FooterBox>
    </FooterContainer>
  );
}
