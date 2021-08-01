import styled from "styled-components";

export const ContainerContent = styled.div`
  display: grid;
  grid-template-rows: 580px;
  grid-template-columns: 89px repeat(7, 127px);
  width: 978px;
  margin-left: auto;
  margin-right: auto;
  background: var(--lightgrey);
`;

export const ContainerHours = styled.div`
  display: grid;
  background: var(--darkgrey2);
  color: var(--darkgrey4);
  grid-template-rows: 50px repeat(5, 92px) repeat(2, 35px);

  span {
    font-weight: bold;
  }

  span :last-of-type {
    color: var(--orange);
    font-size: 5px;
  }
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 11px;
    border-top: 2px solid var(--grey2);

    :nth-child(1) {
      border-top: none;
    }

    :nth-child(2) {
      border-top: none;
    }
    :nth-child(7) {
      border-top: none;
    }

    :last-child {
      font-size: 8px;
    }
  }
`;

export const ContainerFreeDay = styled.div`
  display: grid;
  grid-template-rows: 50px 460px 70px;
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

export const GuiltFreeInfo = styled.div`
  border-right: 2px solid var(--grey2);
  border-top: 2px solid var(--grey2);
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  align-items: center;
  color: var(--grey2);
  max-width: 127px;
  font-size: 36px;

  p {
    text-transform: uppercase;
    color: var(--darkgrey4);
    font-size: 26px;
    transform: rotate(-90deg);
    white-space: nowrap;
    margin-top: 100px;
    font-weight: 300;
    letter-spacing: 3px;
  }
`;
export const PrintIcon = styled.div`
  background: var(--darkgrey2);
  font-size: 27px;
  text-transform: capitalize;
  color: var(--darkgrey4);
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    :hover {
      cursor: pointer;
    }
  }

  p {
    font-size: 13px;
    margin-left: 10px;
    :hover {
      cursor: pointer;
    }
  }
`;
