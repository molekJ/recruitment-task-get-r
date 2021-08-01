import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 50px repeat(5, 92px) repeat(2, 35px);

  > div {
    border-top: 2px solid var(--grey2);
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
