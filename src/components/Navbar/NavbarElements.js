import styled from "styled-components";

export const NavContainer = styled.div`
  background: var(--lightgrey);
  /* background: red; */
  width: 978px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
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
  border-bottom: 1px solid transparent;
  transition: 0.2s ease-out;
  &:hover {
    color: #ff801a;
    border-bottom: 1px solid #ff801a;
    cursor: pointer;
    transition: 0.2s ease-out;
    &::after {
      display: block;
      position: absolute;
      height: 1px;
      width: 20px;
      background: orange;
    }
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
