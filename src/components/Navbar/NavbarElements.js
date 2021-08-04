import styled from "styled-components";

export const NavContainer = styled.div`
  width: 978px;
  height: 80px;
  background: var(--lightgrey);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 768px;
    justify-content: space-around;
  }
`;

export const NavRoute = styled.ul`
  margin-left: 118px;
  font-size: 10px;
  font-weight: bold;
  color: var(--darkgrey);
  text-transform: uppercase;
  list-style: none;
  border-left: 1px solid var(--lightgrey2);
  display: flex;
  align-items: center;
`;

export const NavRouteElement = styled.li`
  margin-left: 32px;
  position: relative;
  letter-spacing: 1px;
  transition: 0.2s ease-out;
  display: flex;
  justify-content: center;

  &:hover {
    color: #ff801a;
    cursor: pointer;
    transition: 0.2s ease-out;
    &::after {
      opacity: 1;
    }
  }

  &:after {
    width: 25px;
    height: 2px;
    background: var(--lightorange);
    transition: 0.2s ease-out;
    content: "";
    top: 19px;
    opacity: 0;
    display: block;
    position: absolute;
  }
`;

export const NavProfile = styled.div`
  margin-right: 1px;
  display: flex;
  align-items: center;
`;

export const NavProfileImg = styled.img`
  height: 36px;
  margin-right: 8px;
`;

export const NavProfileMenu = styled.select`
  font-size: 10px;
  color: var(--darkgrey);
  background: #fff;
  border: none;
`;
