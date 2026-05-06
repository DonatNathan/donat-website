import { Box, Button, Typography } from "@mui/material";
import { HashLink as Link } from 'react-router-hash-link';
import React, { useContext } from "react";
import { ThemeContext, themes } from "../../utils/themes/ThemeContext";
import { IoMdSunny, IoMdMoon } from 'react-icons/io';

const Header = () => {
    
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <Box id="home" sx={{display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "space-around", alignItems: "center", textAlign: "center", backgroundColor: theme.BackgroundColor, paddingVertical: "50px"}}>
            <Box component={Link} to="#home" sx={{display: "flex", flexDirection: "row", alignItems: "center", textDecoration: "none"}}>
                <Box component="img" sx={{width: 50}} alt="Black Logo Donat" src="/images/logo.png" />
                <Typography sx={{fontSize: 30, fontWeight: "bold", color: theme.BoldTextColor}}>Donat</Typography>
            </Box>
            <Box sx={{display: "flex", flexWrap: "wrap", flexDirection: "row", alignItems: "center"}}>
                {/* <Link to={"#home"} style={{color: theme.BoldTextColor, textDecoration: "none", margin: "15px"}}>Home</Link> */}
                <Link to={"#home"} style={{color: theme.BoldTextColor, textDecoration: "none", margin: "10px"}}>About</Link>
                <Link to={"#process"} style={{color: theme.BoldTextColor, textDecoration: "none", margin: "10px"}}>Process</Link>
                <Link to={"#portfolio"} style={{color: theme.BoldTextColor, textDecoration: "none", margin: "10px"}}>Portfolio</Link>
                <Link to={"#services"} style={{color: theme.BoldTextColor, textDecoration: "none", margin: "10px"}}>Services</Link>
                <Button onClick={toggleTheme} style={{backgroundColor: "transparent", color: theme.BoldTextColor, textTransform: "none", fontSize: 15, margin: "10px", minWidth: "auto", padding: "8px"}}>
                    {theme === themes.dark ? <IoMdSunny size={20} /> : <IoMdMoon size={20} />}
                </Button>
                <Button href="#contact" style={{width: "fit-content", backgroundColor: theme.MainColor, color: theme.BackgroundColor, textTransform: "none", fontSize: 15, margin: "15px"}}>Contact</Button>
            </Box>
        </Box>
    )
}

export default Header;