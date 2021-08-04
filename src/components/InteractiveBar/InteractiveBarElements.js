import styled from "styled-components";

export const ContainerBar = styled.div`
  width: 978px;
  height: 112px;
  background: var(--grey);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 768px;
    height: 100%;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
  }
`;

export const WeekProgressContainer = styled.div`
  height: 100%;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
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

  @media screen and (max-width: 768px) {
    width: 100px;
  }
`;
export const SliderH2 = styled.h2`
  color: var(--orange);
  font-size: 34px;
  font-weight: 400;
  margin: 0 36px;
  @media screen and (max-width: 768px) {
    font-size: 50px;
  }
`;
export const ChooseFoodContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const ChooseFoodH3 = styled.h3`
  font-size: 7px;
  font-weight: 500;
  color: var(--darkgrey3);
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    align-self: center;
    margin-top: 10px;
  }
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

  @media screen and (max-width: 768px) {
    font-size: 40px;
    &:hover {
      transform: none;
    }
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
