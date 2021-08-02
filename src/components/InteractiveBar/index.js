import React, { useState } from "react";
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
  Strikethrough,
} from "./InteractiveBarElements";
import {
  GiCheeseWedge,
  GiSteak,
  GiChickenOven,
  GiFruitBowl,
} from "react-icons/gi";
import { IoFish } from "react-icons/io5";

export default function InteractivBar() {
  const [isCheck, setIsCheck] = useState(false);

  const toggleCheck = () => {
    return setIsCheck(!isCheck);
  };
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
          <FoodIcon isCheck={isCheck} onClick={toggleCheck}>
            <GiFruitBowl />
            {isCheck && <Strikethrough />}
          </FoodIcon>
          <FoodIcon>
            <GiCheeseWedge />
          </FoodIcon>
          <FoodIcon>
            <GiSteak />
          </FoodIcon>
          <FoodIcon>
            <IoFish />
          </FoodIcon>
          <FoodIcon>
            <GiChickenOven />
          </FoodIcon>
        </ChooseFoodIcons>
      </ChooseFoodContainer>
    </ContainerBar>
  );
}
