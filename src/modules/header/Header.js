import { Box, Button, Typography } from "@mui/material";
import { HashLink as Link } from 'react-router-hash-link';
import React, { useContext } from "react";
import { ThemeContext, themes } from "../../utils/themes/ThemeContext";
import { IoMdSunny, IoMdMoon } from 'react-icons/io';

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
                    <Link to={"#home"} style={{color: theme.BoldTextColor, textDecoration: "none", margin: "10px"}}>About</Link>
                    <Link to={"#process"} style={{color: theme.BoldTextColor, textDecoration: "none", margin: "10px"}}>Process</Link>
                    <Link to={"#portfolio"} style={{color: theme.BoldTextColor, textDecoration: "none", margin: "10px"}}>Portfolio</Link>
                    <Link to={"#services"} style={{color: theme.BoldTextColor, textDecoration: "none", margin: "10px"}}>Services</Link>
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