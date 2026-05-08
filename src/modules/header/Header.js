import { Box, Button, Typography } from "@mui/material";
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import React, { useContext } from "react";
import { ThemeContext, themes } from "../../utils/themes/ThemeContext";
import { IoMdSunny, IoMdMoon } from 'react-icons/io';

const HeaderLink = styled(Link)`
    color: ${props => props.textColor} !important;
    text-decoration: none;
    margin: 0 10px;
    font-size: 16px;
    position: relative;
    transition: color 0.3s ease;

    &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: ${props => props.accentColor};
        transition: width 0.3s ease;
    }

    &:hover {
        color: ${props => props.textColor} !important;
    }

    &:hover::after {
        width: 100%;
    }
`;
const Header = () => {
    
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <Box sx={{position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1100, display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "space-around", alignItems: "center", textAlign: "center", backgroundColor: theme.BackgroundColor, py: "20px", borderBottom: `1px solid ${theme.SecondBackgroundColor}`}}>
            <Box component={Link} to="#home" sx={{display: "flex", flexDirection: "row", alignItems: "center", textDecoration: "none"}}>
                <Box component="img" sx={{width: 50}} alt="Donat logo" src={theme === themes.dark ? "/images/logo_white.png" : "/images/logo.png"} />
                <Typography sx={{fontSize: 30, fontWeight: "bold", color: theme.BoldTextColor}}>Donat</Typography>
            </Box>
            <Box sx={{display: "flex", flexWrap: "wrap", flexDirection: "row", alignItems: "center"}}>
                <Box sx={{display: {xs: "none", md: "flex"}, flexWrap: "wrap", flexDirection: "row", alignItems: "center"}}>
                    {/* <Link to={"#home"} style={{color: theme.BoldTextColor, textDecoration: "none", margin: "15px"}}>Home</Link> */}
                    <HeaderLink to={"#home"} textColor={theme.BoldTextColor} accentColor={theme.MainColor}>Home</HeaderLink>
                    <HeaderLink to={"#services"} textColor={theme.BoldTextColor} accentColor={theme.MainColor}>Services</HeaderLink>
                    <HeaderLink to={"#foundry-project-0"} textColor={theme.BoldTextColor} accentColor={theme.MainColor}>Projects</HeaderLink>
                </Box>
                <Button onClick={toggleTheme} style={{backgroundColor: "transparent", color: theme.BoldTextColor, textTransform: "none", fontSize: 15, margin: "10px", minWidth: "auto", padding: "8px"}}>
                    {theme === themes.dark ? <IoMdSunny size={20} /> : <IoMdMoon size={20} />}
                </Button>
                <Button href="#contact" sx={{display: {xs: "none", md: "inline-flex"}, width: "fit-content", backgroundColor: theme.MainColor, color: theme.BackgroundColor, textTransform: "none", fontSize: 15, margin: "15px", transition: "background-color 0.3s ease, color 0.3s ease", '&:hover': {backgroundColor: theme.SecondBackgroundColor, color: theme.BoldTextColor}}}>Contact</Button>
            </Box>
        </Box>
    )
}

export default Header;