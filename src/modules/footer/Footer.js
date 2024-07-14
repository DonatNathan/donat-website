import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{width: "90%", height: "10vh", paddingLeft: "5%", paddingRight: "5%", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.9)"}}>
            <img alt="White Donat logo" src="/images/logo_white.png" width="50px" />
            <Typography sx={{fontWeight: "bold"}}>© 2024 - Nathan Donat-Filliod</Typography>
        </Box>
    );
};

export default Footer;