import React from "react";
import {
  NavContainer,
  NavRoute,
  NavRouteElement,
  NavProfile,
  NavProfileImg,
  NavProfileMenu,
} from "./NavbarElements";
import { userInfo } from "../../Data/profile";

export default function Navbar() {
  return (
    <>
      <NavContainer>
        <NavRoute>
          <NavRouteElement>Dashboard</NavRouteElement>
          <NavRouteElement>Recipes</NavRouteElement>
          <NavRouteElement>Challenge</NavRouteElement>
        </NavRoute>
        <NavProfile>
          <NavProfileImg src={userInfo.img} alt={userInfo.alt} />
          <NavProfileMenu>
            <option>
              {userInfo.name} {userInfo.surname}
            </option>
          </NavProfileMenu>
        </NavProfile>
      </NavContainer>
    </>
  );
}
