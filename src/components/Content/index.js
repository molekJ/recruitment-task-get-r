import React from "react";
import ContainerDay from "./ContainerDay";
import { ContainerContent, ContainerHours } from "./ContentElements";
import { MdPlayArrow } from "react-icons/md";

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
            Wokrout{" "}
            <span>
              <MdPlayArrow />
            </span>
          </p>
        </ContainerHours>
        <ContainerDay />
        <ContainerDay />
        <ContainerDay />
        <ContainerDay />
        <ContainerDay />
        <ContainerDay />
        <ContainerDay />
      </ContainerContent>
    </>
  );
}
