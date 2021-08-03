import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 50px repeat(5, 92px) repeat(2, 35px);
  transition: 0.3s ease-in-out;
  > div {
    border-top: 2px solid var(--grey2);
  }

  :hover {
    z-index: 999;
    outline: 2px solid var(--orange);
    font-weight: bold;
    transition: 0.3s ease-in-out;
    transform: scale(1.015);
    h3 {
      color: var(--orange);
    }
  }
`;

export const DayH3 = styled.h3`
  text-transform: uppercase;
  font-size: 18px;
  color: var(--lightgreen);
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 2px solid var(--grey2);
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
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--darkgrey2);
  border-right: 2px solid var(--grey2);
`;
export const WokroutIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  background: var(--darkgrey2);
  border-right: 2px solid var(--grey2);

  > :hover {
    cursor: pointer;
  }
`;
export const CheckIcon = styled.div``;

export const PictureFood = styled.img`
  display: block;
  height: 54px;
  opacity: 50%;
  /* width: 54px; */
`;
