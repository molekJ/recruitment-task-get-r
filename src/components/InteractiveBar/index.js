import React from "react";
import {
  ContainerBar,
  WeekProgressContainer,
  WeekProgressH3,
  WeekProgressBar,
  WeekSlider,
  SliderBtn,
  SliderH2,
  ChooseFoodContainer,
  ChooseFoodH3,
  ChooseFoodIcons,
  FoodIcon,
} from "./InteractiveBarElements";

export default function InteractivBar() {
  return (
    <ContainerBar>
      <WeekProgressContainer>
        <WeekProgressH3>Your 12 Week Progress</WeekProgressH3>
        <WeekProgressBar></WeekProgressBar>
      </WeekProgressContainer>
      <WeekSlider>
        <SliderBtn>{"<"}</SliderBtn>
        <SliderH2>Week 7</SliderH2>
        <SliderBtn>{">"}</SliderBtn>
      </WeekSlider>
      <ChooseFoodContainer>
        <ChooseFoodH3>Select Your protein options</ChooseFoodH3>
        <ChooseFoodIcons>
          <FoodIcon>1</FoodIcon>
          <FoodIcon>2</FoodIcon>
          <FoodIcon>3</FoodIcon>
          <FoodIcon>4</FoodIcon>
          <FoodIcon>5</FoodIcon>
        </ChooseFoodIcons>
      </ChooseFoodContainer>
    </ContainerBar>
  );
}
