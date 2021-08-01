import React from "react";
import {
  Container,
  DayH3,
  MealContainer,
  CarbInfo,
  WokroutIcon,
  CheckIcon,
} from "./DayElements";
import { CgGym } from "react-icons/cg";

export default function ContainerDay() {
  return (
    <Container>
      <DayH3>day 65</DayH3>
      <MealContainer>
        <p>Jakis posilek</p>
        <img />
        <CheckIcon />
      </MealContainer>
      <MealContainer>
        <p>Jakis posilek</p>
        <img />
      </MealContainer>
      <MealContainer>
        <p>Jakis posilek</p>
        <img />
      </MealContainer>
      <MealContainer>
        <p>Jakis posilek</p>
        <img />
      </MealContainer>
      <MealContainer>
        <p>Jakis posilek</p>
        <img />
      </MealContainer>

      <CarbInfo> low-carb</CarbInfo>
      <WokroutIcon>
        <CgGym />
      </WokroutIcon>
    </Container>
  );
}
