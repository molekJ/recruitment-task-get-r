import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 978px;
  height: 234px;
  background: var(--grey);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--darkgrey4);

  p {
    font-size: 12px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    /* width: 100%; */
    height: 100%;
    max-width: 768px;
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

      padding: 20px;
      margin: 0;
      border: none;
    }
  }
  :nth-of-type(2) {
    width: 366px;
    padding-left: 48px;
    padding-right: 80px;
    @media screen and (max-width: 768px) {
      height: 200px;
      width: 300px;

      padding: 20px;

      margin: 0;
      border: none;
    }
  }
  :nth-of-type(3) {
    border-left: 1px solid var(--darkgrey6);
    padding-left: 40px;
    @media screen and (max-width: 768px) {
      height: 200px;
      width: 300px;
      padding: 20px;

      margin: 0;
      border: none;
    }
  }
`;

export const FooterH3 = styled.h3`
  font-size: 20px;
  font-weight: 500;
  max-width: 220px;
  margin-bottom: 24px;
`;
export const FooterButtonContainer = styled.div`
  button :nth-of-type(1) {
    position: relative;
    top: 2px;
    color: black;
  }
`;
export const FooterButton = styled.button`
  height: 33px;
  min-width: 95px;
  background: var(--lightgrey);
  border: none;
  border-radius: 3px;
  font-size: 14px;
  color: var(--darkgrey4);

  margin-right: 14px;

  :hover {
    cursor: pointer;
  }
`;
