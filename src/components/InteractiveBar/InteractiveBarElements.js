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
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const WeekProgressH3 = styled.h3`
  font-size: 7px;
  font-weight: 500;
  color: var(--darkgrey3);
  text-transform: uppercase;
`;
export const WeekProgressBar = styled.div`
  height: 30px;
  width: 236px;
  background: red;
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

  &:hover {
    cursor: pointer;
  }

  &:nth-child(1) {
    margin-left: 0;
    color: #39a160;
  }

  &:nth-child(2) {
    color: #f6921e;
  }
  &:nth-child(3) {
    color: #bb433f;
  }
  &:nth-child(4) {
    color: #d3d3d3;
    transform: scaleX(-1);
  }

  &:nth-child(5) {
    margin-right: 2px;
    color: #a46536;
  }
`;
