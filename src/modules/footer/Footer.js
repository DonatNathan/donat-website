import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { HashLink as Link } from 'react-router-hash-link';
import { ThemeContext } from "../../utils/themes/ThemeContext";
import { themes } from "../../utils/themes/ThemeContext";
import styled from 'styled-components';

const FooterLink = styled(Link)`
  color: ${props => props.textColor} !important;
  text-decoration: none;
  margin: 10px 15px;
  font-size: 14px;
  transition: all 0.3s ease;
  position: relative;

  &:link,
  &:visited,
  &:hover,
  &:active {
    color: ${props => props.textColor} !important;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${props => props.accentColor};
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const Footer = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", backgroundColor: theme.SecondBackgroundColor, paddingTop: "60px", paddingBottom: "40px", borderTop: `1px solid ${theme.BackgroundColor}`}}>
            <Box component={Link} to={"#home"} sx={{display: "flex", flexDirection: "row", alignItems: "center", textDecoration: "none", marginBottom: "30px"}}>
              <Box component="img" sx={{width: 40}} alt="Donat logo" src={theme === themes.dark ? "/images/logo_white.png" : "/images/logo.png"} />
              <Typography sx={{fontSize: 24, fontWeight: "bold", color: theme.BoldTextColor, marginLeft: "10px"}}>Donat</Typography>
            </Box>
            
            <Box sx={{display: "flex", flexWrap: "wrap", flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: "30px"}}>
                <FooterLink to={"#home"} textColor={theme.BoldTextColor} accentColor={theme.MainColor}>Home</FooterLink>
                <FooterLink to={"#services"} textColor={theme.BoldTextColor} accentColor={theme.MainColor}>Services</FooterLink>
                <FooterLink to={"#foundry-project-0"} textColor={theme.BoldTextColor} accentColor={theme.MainColor}>Projects</FooterLink>
                <FooterLink to={"#contact"} textColor={theme.BoldTextColor} accentColor={theme.MainColor}>Contact</FooterLink>
            </Box>
            
            <Typography sx={{fontSize: 13, color: theme.SubTextColor}}>Copyright © 2026 Nathan Donat-Filliod. All rights reserved.</Typography>
        </Box>
    );
};

export default Footer;