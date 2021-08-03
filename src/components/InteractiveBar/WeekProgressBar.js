import React from "react";
import styled from "styled-components";

const Ball = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--grey2);

  :nth-of-type(1) {
    background: var(--darkgrey7);
  }

  :nth-of-type(3) {
    background: var(--darkgrey7);
  }

  :nth-of-type(5) {
    background: var(--darkgrey7);
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
    background: var(--darkgrey7);
  }
  :nth-of-type(4) {
    background: var(--darkgrey7);
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
