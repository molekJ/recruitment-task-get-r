import styled from "styled-components";

export const NavContainer = styled.div`
  background: #ffffff;
  /* background: red; */
  width: 978px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  margin: 0 23px;
`;

export const NavRoute = styled.div`
  margin-left: 118px;
  display: flex;
  align-items: center;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: bold;
  color: #7c7c7c;
  border-left: 1px solid #efefef;
`;

export const NavRouteElement = styled.div`
  margin-left: 32px;
  border-bottom: 1px solid transparent;
  transition: 0.2s ease-out;
  &:hover {
    color: #ff801a;
    border-bottom: 1px solid #ff801a;
    cursor: pointer;
    transition: 0.2s ease-out;
  }
`;

export const NavProfile = styled.div`
  display: flex;
  align-items: center;
`;

export const NavProfileImg = styled.img`
  height: 36px;
  margin-right: 8px;
`;

export const NavProfileMenu = styled.select`
  font-size: 10px;
  border: none;
  background: #fff;
  color: #7c7c7c;
`;
