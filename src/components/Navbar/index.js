import React from "react";
import {
  NavContainer,
  NavRoute,
  NavRouteElement,
  NavProfile,
  NavProfileImg,
  NavProfileMenu,
} from "./NavbarElements";

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
          <NavProfileImg>Picture</NavProfileImg>
          <NavProfileMenu>Menu</NavProfileMenu>
        </NavProfile>
      </NavContainer>
    </>
  );
}
