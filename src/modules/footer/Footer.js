import React, { useContext } from "react";
import { Box, Link, Typography } from "@mui/material";
import { ThemeContext } from "../../utils/themes/ThemeContext";

const Footer = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <Box sx={{display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "space-around", alignItems: "center", textAlign: "center", backgroundColor: theme.BoldTextColor, color: theme.BackgroundColor, paddingTop: "200px", paddingBottom: "80px"}}>
            <Box sx={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <Box component="img" sx={{width: 50}} alt="White Logo Donat" src="/images/logo_white.png" />
                <Typography sx={{fontSize: 30, fontWeight: "bold"}}>Donat</Typography>
            </Box>
            <Box sx={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <Link sx={{color: theme.BackgroundColor, textDecoration: "none", margin: "10px"}}>Home</Link>
                <Link sx={{color: theme.BackgroundColor, textDecoration: "none", margin: "10px"}}>About</Link>
                <Link sx={{color: theme.BackgroundColor, textDecoration: "none", margin: "10px"}}>Process</Link>
                <Link sx={{color: theme.BackgroundColor, textDecoration: "none", margin: "10px"}}>Portfolio</Link>
                <Link sx={{color: theme.BackgroundColor, textDecoration: "none", margin: "10px"}}>Services</Link>
                <Link sx={{color: theme.BackgroundColor, textDecoration: "none", margin: "10px"}}>Contact</Link>
            </Box>
            <Typography sx={{fontSize: 15}}>Copyright © 2024 Donat.</Typography>
        </Box>
    );
};

export default Footer;