import { Box, Button, Link, Typography } from "@mui/material";
import React, { useContext } from "react";
import { ThemeContext } from "../../utils/themes/ThemeContext";

const Header = () => {
    
    const {theme} = useContext(ThemeContext);

    return (
        <Box sx={{display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "space-around", alignItems: "center", textAlign: "center", backgroundColor: theme.BackgroundColor, color: theme.BoldTextColor, paddingTop: "20px", paddingBottom: "30px"}}>
            <Box sx={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <Box component="img" sx={{width: 50}} alt="Black Logo Donat" src="/images/logo.png" />
                <Typography sx={{fontSize: 30, fontWeight: "bold"}}>Donat</Typography>
            </Box>
            <Box sx={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <Link sx={{color: theme.BoldTextColor, textDecoration: "none", margin: "15px"}}>Home</Link>
                <Link sx={{color: theme.BoldTextColor, textDecoration: "none", margin: "15px"}}>About</Link>
                <Link sx={{color: theme.BoldTextColor, textDecoration: "none", margin: "15px"}}>Process</Link>
                <Link sx={{color: theme.BoldTextColor, textDecoration: "none", margin: "15px"}}>Portfolio</Link>
                <Link sx={{color: theme.BoldTextColor, textDecoration: "none", margin: "15px"}}>Services</Link>
                <Button sx={{width: "fit-content", backgroundColor: theme.MainColor, color: theme.BackgroundColor, textTransform: "none", fontSize: 15, margin: "15px"}}>Contact</Button>
            </Box>
        </Box>
    )
}

export default Header;