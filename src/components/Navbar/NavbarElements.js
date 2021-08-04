import styled from "styled-components";

export const NavContainer = styled.div`
  background: var(--lightgrey);
  width: 978px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 768px;
    justify-content: space-around;
  }
`;

export const NavRoute = styled.ul`
  margin-left: 118px;
  display: flex;
  align-items: center;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: bold;
  color: var(--darkgrey);
  border-left: 1px solid var(--lightgrey2);
  list-style: none;
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
    display: block;
    position: absolute;
    content: "";
    height: 2px;
    width: 25px;
    background: var(--lightorange);
    top: 19px;
    opacity: 0;
    transition: 0.2s ease-out;
  }
`;

export const NavProfile = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1px;
`;

export const NavProfileImg = styled.img`
  height: 36px;
  margin-right: 8px;
`;

export const NavProfileMenu = styled.select`
  font-size: 10px;
  border: none;
  background: #fff;
  color: var(--darkgrey);
`;
