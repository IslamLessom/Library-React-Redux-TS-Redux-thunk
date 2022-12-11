import styled from "styled-components";
import font from '../../assets/font-femaly/static/Montserrat-Medium.ttf'

export const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 5px;
  font-family: 'Montserrat', sans-serif;
`;

export const NavbarLogoName = styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarMenu = styled.div``;

export const NavbarRegistration = styled.div``;

export const Logo = styled.img`
  width: 45px;
  margin-right: 15px;
`;
export const NameLogo = styled.h1`
  font-size: 30px;
  color: black;
`;

export const MenuUl = styled.ul`
  display: flex;
`;
export const MenuLi = styled.li`
  text-decoration: none;
  list-style-type: none;
`;

export const MenuA = styled.a`
    color: black;
    font-size: 20px;
    padding: 75px;
    padding-bottom: none;
`

export const ButtonA = styled.a`
    color: black;
    font-size: 16px;
`

export const Button = styled.button`
    border: none;
    padding: 15px;
    margin-left: 10px;
    border-radius: 8px;
    background: #FF8001;
    color: white;
    font-size: 15px;
`
