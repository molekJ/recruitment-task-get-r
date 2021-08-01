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
