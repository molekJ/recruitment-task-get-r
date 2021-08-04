import React from "react";
import ContainerDay from "./ContainerDay";
import {
  ContainerContent,
  ContainerHours,
  ContainerFreeDay,
  GuiltFreeInfo,
  PrintIcon,
  DayH3,
} from "./ContentElements";
import { MdPlayArrow } from "react-icons/md";
import { AiFillPrinter } from "react-icons/ai";
import { MdTagFaces } from "react-icons/md";
import diets from "../../Data/diets";

export default function Content() {
  return (
    <>
      <ContainerContent>
        <ContainerHours>
          <p></p>
          <p>
            <span>6:00</span>am
          </p>
          <p>
            <span>9:00</span>am
          </p>
          <p>
            <span>12:00</span>pm
          </p>
          <p>
            <span>3:00</span>pm
          </p>
          <p>
            <span>6:00</span>pm
          </p>
          <p></p>
          <p>
            Workout{" "}
            <span>
              <MdPlayArrow />
            </span>
          </p>
        </ContainerHours>
        {diets.map((day, index) =>
          day.length === 0 ? (
            <ContainerFreeDay>
              <DayH3>day {index + 1}</DayH3>
              <GuiltFreeInfo>
                <MdTagFaces />
                <p>guilt-free day</p>
              </GuiltFreeInfo>
              <PrintIcon>
                <div>
                  <AiFillPrinter />
                </div>
                <p>print</p>
              </PrintIcon>
            </ContainerFreeDay>
          ) : (
            <ContainerDay key={index} mealInfo={day} indexDay={index} />
          )
        )}
      </ContainerContent>
    </>
  );
}
