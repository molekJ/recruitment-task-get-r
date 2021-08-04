import styled from "styled-components";

export const ContainerContent = styled.div`
  display: grid;
  grid-template-rows: 580px;
  grid-template-columns: 89px repeat(7, 127px);
  width: 978px;
  margin-left: auto;
  margin-right: auto;
  background: var(--lightgrey);

  @media screen and (max-width: 768px) {
    width: 768px;
    height: 100%;
    grid-template-columns: 100px;
    grid-template-rows: repeat(8, 100px);
  }
`;

export const ContainerHours = styled.div`
  color: var(--darkgrey4);
  background: var(--darkgrey2);
  display: grid;
  grid-template-rows: 50px repeat(5, 92px) repeat(2, 35px);

  span {
    font-weight: bold;
  }

  span :last-of-type {
    font-size: 5px;
    color: var(--orange);
  }
  p {
    font-size: 11px;
    border-top: 2px solid var(--grey2);
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;

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
  @media screen and (max-width: 768px) {
    width: 768px;
    height: 100%;
    grid-template-columns: repeat(6, 109px) 0px 114px;
    grid-template-rows: 100px;

    border: none;
    div,
    h3,
    p {
      font-size: 14px;
      border: none;
    }
    p :last-of-type {
      font-size: 20px;
    }
    span :last-of-type {
      font-size: 10px;
      color: var(--orange);
      margin-bottom: 2px;
    }
  }
`;

export const ContainerFreeDay = styled.div`
  display: grid;
  grid-template-rows: 50px 460px 70px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 109px 545px 109px;
    grid-template-rows: 100px;
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

  @media screen and (max-width: 768px) {
    border: none;
  }
`;

export const GuiltFreeInfo = styled.div`
  max-width: 127px;
  font-size: 36px;
  color: var(--grey2);
  border-right: 2px solid var(--grey2);
  border-top: 2px solid var(--grey2);
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  align-items: center;

  p {
    font-size: 26px;
    font-weight: 300;
    letter-spacing: 3px;
    white-space: nowrap;
    color: var(--darkgrey4);
    text-transform: uppercase;
    transform: rotate(-90deg);
    margin-top: 100px;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    border: none;
    padding: 0;
    flex-direction: row;
    justify-content: center;
    p {
      transform: rotate(0deg);
      margin: 0;
      margin-left: 20px;
    }
  }
`;
export const PrintIcon = styled.div`
  font-size: 27px;
  color: var(--darkgrey4);
  text-transform: capitalize;
  background: var(--darkgrey2);
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
