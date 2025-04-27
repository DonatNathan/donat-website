import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { HashLink as Link } from 'react-router-hash-link';
import { ThemeContext } from "../../utils/themes/ThemeContext";

const Footer = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <Box sx={{display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "space-around", alignItems: "center", textAlign: "center", backgroundColor: theme.BoldTextColor, paddingTop: "100px", paddingBottom: "50px"}}>
            <Box component={Link} to={"#home"} sx={{display: "flex", flexDirection: "row", alignItems: "center", textDecoration: "none"}}>
                <Box component="img" sx={{width: 50}} alt="White Logo Donat" src="/images/logo_white.png" />
                <Typography sx={{fontSize: 30, fontWeight: "bold", color: theme.BackgroundColor}}>Donat</Typography>
            </Box>
            <Box sx={{display: "flex", flexWrap: "wrap", flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: "30px", marginTop: "30px"}}>
                {/* <Link to={"#home"} style={{color: theme.BackgroundColor, textDecoration: "none", margin: "10px"}}>Home</Link> */}
                <Link to={"#home"} style={{color: theme.BackgroundColor, textDecoration: "none", margin: "10px"}}>About</Link>
                <Link to={"#process"} style={{color: theme.BackgroundColor, textDecoration: "none", margin: "10px"}}>Process</Link>
                <Link to={"#portfolio"} style={{color: theme.BackgroundColor, textDecoration: "none", margin: "10px"}}>Portfolio</Link>
                <Link to={"#services"} style={{color: theme.BackgroundColor, textDecoration: "none", margin: "10px"}}>Services</Link>
                <Link to={"#contact"} style={{color: theme.BackgroundColor, textDecoration: "none", margin: "10px"}}>Contact</Link>
            </Box>
            <Typography sx={{fontSize: 15, color: theme.BackgroundColor}}>Copyright © 2025 Donat.</Typography>
        </Box>
    );
};

export default Footer;