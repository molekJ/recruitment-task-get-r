import React from "react";
import styled from "styled-components";

const Ball = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--grey2);

  :nth-of-type(1) {
    background: var(--lightgreen);
  }

  :nth-of-type(3) {
    background: var(--lightgreen);
  }

  :nth-of-type(5) {
    background: var(--lightgreen);
  }
  :nth-of-type(7) {
    background: var(--lightgrey);
    border: 1px solid var(--grey2);
  }
`;

const Container = styled.div`
  display: flex;
  margin-top: 7px;
`;

const HorizontalLine = styled.div`
  width: 10px;
  height: 2px;
  background: var(--grey2);
  align-self: center;

  :nth-of-type(2) {
    background: var(--lightgreen);
  }
  :nth-of-type(4) {
    background: var(--lightgreen);
  }
`;

export default function WeekProgressBar() {
  return (
    <Container>
      <Ball />
      <HorizontalLine />
      <Ball />
      <HorizontalLine />

      <Ball />
      <HorizontalLine />
      <Ball />
      <HorizontalLine />
      <Ball />
      <HorizontalLine />
      <Ball />
      <HorizontalLine />
      <Ball />
      <HorizontalLine />
      <Ball />
      <HorizontalLine />
      <Ball />
      <HorizontalLine />
      <Ball />
      <HorizontalLine />
      <Ball />
      <HorizontalLine />
      <Ball />
      <HorizontalLine />
      <Ball />
    </Container>
  );
}
