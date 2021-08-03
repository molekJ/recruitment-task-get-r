import React, { useState } from "react";
import {
  ContainerBar,
  WeekProgressContainer,
  WeekProgressH3,
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
import WeekProgressBar from "./WeekProgressBar";

export default function InteractivBar({ week, setWeek }) {
  const [isCheckVege, setIsCheckVege] = useState(false);
  const [isCheckCheese, setIsCkeckCheese] = useState(false);
  const [isCheckBeef, setIsCkeckBeef] = useState(false);
  const [isCheckFish, setIsCkeckFish] = useState(false);
  const [isCheckChicken, setIsCkeckChicken] = useState(false);

  const toggleCheck = (isCheck, setIsCheck) => {
    return setIsCheck(!isCheck);
  };

  const handlePrevWeek = () => {
    if (week === 1) {
      return;
    }
    return setWeek(week - 1);
  };
  const handleNextWeek = () => {
    if (week === 12) {
      return;
    }
    return setWeek(week + 1);
  };

  return (
    <ContainerBar>
      <WeekProgressContainer>
        <WeekProgressH3>Your 12 Week Progress</WeekProgressH3>
        <WeekProgressBar></WeekProgressBar>
      </WeekProgressContainer>
      <WeekSlider>
        {week === 1 ? (
          <SliderBtn
            style={{
              color: "transparent",
              background: "transparent",
              cursor: "auto",
            }}
            onClick={handlePrevWeek}
          >
            {"<"}
          </SliderBtn>
        ) : (
          <SliderBtn onClick={handlePrevWeek}>{"<"}</SliderBtn>
        )}
        <SliderH2>Week {week}</SliderH2>
        {week === 12 ? (
          <SliderBtn
            style={{
              color: "transparent",

              background: "transparent",
              cursor: "auto",
            }}
            onClick={handleNextWeek}
          >
            {">"}
          </SliderBtn>
        ) : (
          <SliderBtn onClick={handleNextWeek}>{">"}</SliderBtn>
        )}
      </WeekSlider>
      <ChooseFoodContainer>
        <ChooseFoodH3>Select Your protein options</ChooseFoodH3>
        <ChooseFoodIcons>
          <FoodIcon
            onClick={() => {
              toggleCheck(isCheckVege, setIsCheckVege);
            }}
            style={{ color: isCheckVege && "var(--grey2)" }}
          >
            <GiFruitBowl />
            {isCheckVege && <Strikethrough />}
          </FoodIcon>
          <FoodIcon
            onClick={() => {
              toggleCheck(isCheckCheese, setIsCkeckCheese);
            }}
            style={{ color: isCheckCheese && "var(--grey2)" }}
          >
            <GiCheeseWedge />
            {isCheckCheese && <Strikethrough />}
          </FoodIcon>
          <FoodIcon
            onClick={() => {
              toggleCheck(isCheckBeef, setIsCkeckBeef);
            }}
            style={{ color: isCheckBeef && "var(--grey2)" }}
          >
            <GiSteak />
            {isCheckBeef && <Strikethrough />}
          </FoodIcon>
          <FoodIcon
            onClick={() => {
              toggleCheck(isCheckFish, setIsCkeckFish);
            }}
            style={{ color: isCheckFish && "var(--grey2)" }}
          >
            <IoFish />
            {isCheckFish && <Strikethrough />}
          </FoodIcon>
          <FoodIcon
            onClick={() => {
              toggleCheck(isCheckChicken, setIsCkeckChicken);
            }}
            style={{ color: isCheckChicken && "var(--grey2)" }}
          >
            <GiChickenOven />
            {isCheckChicken && <Strikethrough />}
          </FoodIcon>
        </ChooseFoodIcons>
      </ChooseFoodContainer>
    </ContainerBar>
  );
}
