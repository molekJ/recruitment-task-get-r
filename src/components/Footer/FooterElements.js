import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 978px;
  height: 234px;
  color: var(--darkgrey4);
  background: var(--grey);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 12px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 768px) {
    height: 100%;
    max-width: 768px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
export const FooterBox = styled.div`
  width: 306px;

  :nth-of-type(1) {
    border-right: 1px solid var(--darkgrey6);
    padding-right: 70px;
    padding-left: 5px;
    @media screen and (max-width: 768px) {
      height: 200px;
      width: 300px;
      border: none;
      padding: 20px;
      margin: 0;
    }
  }
  :nth-of-type(2) {
    width: 366px;
    padding-left: 48px;
    padding-right: 80px;
    @media screen and (max-width: 768px) {
      height: 200px;
      width: 300px;
      border: none;
      padding: 20px;
      margin: 0;
    }
  }
  :nth-of-type(3) {
    border-left: 1px solid var(--darkgrey6);
    padding-left: 40px;
    @media screen and (max-width: 768px) {
      height: 200px;
      width: 300px;
      border: none;
      padding: 20px;
      margin: 0;
    }
  }
`;

export const FooterH3 = styled.h3`
  max-width: 220px;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 24px;
`;
export const FooterButtonContainer = styled.div`
  button :nth-of-type(1) {
    color: black;
    position: relative;
    top: 2px;
  }
`;
export const FooterButton = styled.button`
  height: 33px;
  min-width: 95px;
  font-size: 14px;
  color: var(--darkgrey4);
  background: var(--lightgrey);
  border: none;
  border-radius: 3px;
  margin-right: 14px;

  :hover {
    cursor: pointer;
  }
`;
