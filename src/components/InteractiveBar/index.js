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

export default function InteractivBar({ week, setWeek }) {
  const [isCheck, setIsCheck] = useState(false);

  const toggleCheck = () => {
    return setIsCheck(!isCheck);
  };

  const handlePrevWeek = () => {
    if (week === 1) {
      return;
    }
    return setWeek(week - 1);
  };
  const handleNextWeek = () => {
    return setWeek(week + 1);
  };

  return (
    <ContainerBar>
      <WeekProgressContainer>
        <WeekProgressH3>Your 12 Week Progress</WeekProgressH3>
        <WeekProgressBar></WeekProgressBar>
      </WeekProgressContainer>
      <WeekSlider>
        <SliderBtn onClick={handlePrevWeek}>{"<"}</SliderBtn>
        <SliderH2>Week {week}</SliderH2>
        <SliderBtn onClick={handleNextWeek}>{">"}</SliderBtn>
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
