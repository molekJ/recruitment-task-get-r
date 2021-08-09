import React from "react";
import {
  Container,
  DayH3,
  MealContainer,
  CarbInfo,
  WorkoutIcon,
  PictureFood,
} from "./ContainerDayElements";
import { CgGym } from "react-icons/cg";

export default function ContainerDay({ mealInfo, indexDay }) {
  return (
    <Container>
      <DayH3>day {indexDay + 1}</DayH3>
      {mealInfo.map((meal, index) => (
        <MealContainer key={index}>
          <p>{meal.meal}</p>
          {meal.img != null && (
            <PictureFood src={mealInfo[0].img} alt="Food picture" />
          )}
        </MealContainer>
      ))}

      <CarbInfo> low-carb</CarbInfo>
      <WorkoutIcon>
        <CgGym />
      </WorkoutIcon>
    </Container>
  );
}
