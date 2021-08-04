import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 50px repeat(5, 92px) repeat(2, 35px);
  transition: 0.3s ease-in-out;
  > div {
    border-top: 2px solid var(--grey2);
  }

  :hover {
    font-weight: bold;
    z-index: 999;
    outline: 2px solid var(--orange);
    transition: 0.3s ease-in-out;
    transform: scale(1.015);
    h3 {
      color: var(--orange);
    }
  }
  @media screen and (max-width: 768px) {
    height: 100px;
    width: 768px;
    grid-template-columns: repeat(6, 109px) 114px;
    grid-template-rows: 100px;
    border: none;

    div,
    img,
    h3,
    p {
      border: none;
    }
  }
`;

export const DayH3 = styled.h3`
  font-size: 18px;
  color: var(--lightgreen);
  border-right: 2px solid var(--grey2);
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MealContainer = styled.div`
  font-size: 10px;
  color: var(--darkgrey4);
  border-right: 2px solid var(--grey2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  p {
    margin-top: 12px;
    margin-left: 14px;
    margin-right: 14px;
    align-self: flex-start;
  }
`;
export const CarbInfo = styled.p`
  font-size: 8px;
  color: var(--darkgrey4);
  text-transform: uppercase;
  background: var(--darkgrey2);
  border-right: 2px solid var(--grey2);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const WorkoutIcon = styled.div`
  font-size: 18px;
  background: var(--darkgrey2);
  border-right: 2px solid var(--grey2);
  display: flex;
  justify-content: center;
  align-items: center;

  > :hover {
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;
export const CheckIcon = styled.div``;

export const PictureFood = styled.img`
  height: 54px;
  opacity: 50%;
  display: block;
`;
