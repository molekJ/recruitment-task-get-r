import React from "react";
import {
  Container,
  DayH3,
  MealContainer,
  CarbInfo,
  WokroutIcon,
  PictureFood,
} from "./ContainerDayElements";
import { CgGym } from "react-icons/cg";

export default function ContainerDay(day) {
  return (
    <Container>
      <DayH3>day 65</DayH3>
      {day.mealInfo.map((meal, index) => (
        <MealContainer key={index}>
          <p>{meal.meal}</p>
          {meal.img != null && <PictureFood src={day.mealInfo[0].img} />}
        </MealContainer>
      ))}

      <CarbInfo> low-carb</CarbInfo>
      <WokroutIcon>
        <CgGym />
      </WokroutIcon>
    </Container>
  );
}
