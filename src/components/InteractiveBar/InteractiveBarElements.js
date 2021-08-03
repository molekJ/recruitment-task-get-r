import styled from "styled-components";

export const ContainerBar = styled.div`
  width: 978px;
  height: 112px;
  background: var(--grey);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const WeekProgressContainer = styled.div`
  height: 100%;
  margin-left: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const WeekProgressH3 = styled.h3`
  font-size: 7px;
  font-weight: 500;
  color: var(--darkgrey3);
  text-transform: uppercase;
  margin-bottom: 7px;
`;

export const WeekSlider = styled.div`
  height: 100%;
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
`;
export const SliderBtn = styled.button`
  width: 24px;
  height: 42px;
  border-radius: 5px;
  background: white;
  border: none;
  font-size: 30px;
  font-weight: 100;
  color: var(--darkgrey3);
  &:hover {
    cursor: pointer;
  }
`;
export const SliderH2 = styled.h2`
  color: var(--orange);
  font-size: 34px;
  font-weight: 400;
  margin: 0 36px;
`;
export const ChooseFoodContainer = styled.div`
  height: 100%;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const ChooseFoodH3 = styled.h3`
  font-size: 7px;
  font-weight: 500;
  color: var(--darkgrey3);
  text-transform: uppercase;
`;
export const ChooseFoodIcons = styled.section`
  display: flex;
`;
export const FoodIcon = styled.div`
  font-size: 24px;
  margin-left: 14px;
  margin-top: 13px;
  transition: 0.5s all;
  position: relative;
  color: var(--lightgreen);
  &:hover {
    cursor: pointer;
    transform: scale(1.15);
  }

  &:nth-child(1) {
    margin-left: 0;
  }

  &:nth-child(5) {
    margin-right: 2px;
  }
`;

export const Strikethrough = styled.div`
  width: 32px;
  height: 3px;
  border-top: 1px solid white;
  border-radius: 3px;
  background: var(--grey2);
  position: absolute;
  transform: rotate(-45deg);
  top: 12px;
  right: -4px;
`;
