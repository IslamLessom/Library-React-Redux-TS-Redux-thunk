import React from "react";
import {
  NavbarContent,
  NavbarLogoName,
  NavbarMenu,
  NavbarRegistration,
  Logo,
  NameLogo,
  MenuUl,
  MenuLi,
  MenuA,
  ButtonA,
  Button
} from "./Navbar.element";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <NavbarContent>
      <NavbarLogoName>
        <Logo src={logo} />
        <NameLogo>Libraree</NameLogo>
      </NavbarLogoName>
      <NavbarMenu>
        <MenuUl>
          <MenuLi>
            <MenuA>Книги</MenuA>
          </MenuLi>
          <MenuLi>
            <MenuA>О библиотеке</MenuA>
          </MenuLi>
          <MenuLi>
            <MenuA>Контакты</MenuA>
          </MenuLi>
        </MenuUl>
      </NavbarMenu>
      <NavbarRegistration>
        <ButtonA>Sign In</ButtonA>
        <Button>Sign Up</Button>
      </NavbarRegistration>
    </NavbarContent>
  );
}

export default Navbar;
