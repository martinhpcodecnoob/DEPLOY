import React, { useState } from "react";
import {
  Container,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,RedesSociales,LogoHora,
  Search
} from "./Navbar.elements";
import {
//   FaBattleNet,
  FaBars,
  FaTimes,
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaHome
//   FaHome,
//   FaUserAlt,
//   FaBriefcase,
//   FaGlasses,
} from "react-icons/fa";
import{MdPolicy} from 'react-icons/md'
import{RiMoneyDollarBoxFill} from 'react-icons/ri'
import{MdStayCurrentPortrait,MdAgriculture,MdAddBusiness} from 'react-icons/md'
import { IconContext } from "react-icons";
import {GiPeru} from 'react-icons/gi'
import { fechaHora } from '../../redux/actions'
import Logo_oasis from '../../img/Logo_oasis2.png'
import Searchbar from "../Searchbar/Searchbar";

const Navbar = () => {
const [showMobileMenu, setShowMobileMenu] = useState(false);

return (
    <Container>
        <LogoHora>
            <div>
                <div>{fechaHora()}</div>
                <div><a href="https://www.facebook.com/profile.php?id=100089354930413&mibextid=ZbWKwL"><FaFacebookSquare/></a></div>
            </div>
                <img src={Logo_oasis} alt="oasis" />
        </LogoHora>
        <Wrapper>
            <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
            <LogoContainer to={'/'}>
                <GiPeru />
                <p>OA</p>
                <p>SIS</p>
            </LogoContainer>

            <Search><Searchbar/></Search>

            <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                {showMobileMenu ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            <Menu open={showMobileMenu}>
                <MenuItem>
                        <MenuItemLink to={`/`} onClick={() => setShowMobileMenu(!showMobileMenu)}>
                            <div>
                            <FaHome />
                            INICIO
                            </div>
                        </MenuItemLink>
                </MenuItem>
                <MenuItem>
                        <MenuItemLink to={`/paginateCate/economia`} onClick={() => setShowMobileMenu(!showMobileMenu)}>
                            <div>
                            <RiMoneyDollarBoxFill />
                            ECONOMIA
                            </div>
                        </MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink to={`/paginateCate/politica`} onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <div>
                        <MdPolicy />
                        POLITICA
                        </div>
                    </MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink to={`/paginateCate/actualidad`} onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <div>
                        <MdStayCurrentPortrait />
                        ACTUALIDAD
                        </div>
                    </MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink to={`/paginateCate/cultura`} onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <div>
                        <MdAgriculture />
                        CULTURA
                        </div>
                    </MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink to={`/paginateCate/politica`} onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <div>
                        <MdAddBusiness />
                        NEGOCIOS
                        </div>
                    </MenuItemLink>
                </MenuItem>
            <RedesSociales>
                <a href="https://www.facebook.com/profile.php?id=100089354930413&mibextid=ZbWKwL"><FaFacebookSquare/></a>
                <div><FaInstagram/></div>
                <div><FaTwitterSquare/></div>
            </RedesSociales>
            </Menu>
            </IconContext.Provider>
        </Wrapper>
    </Container>
);
};

export default Navbar;