import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { Box, Typography } from "@mui/material";
import { ThemeContext } from "../utils/themes/ThemeContext";

const Error404 = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <>
            <Helmet>
                <title>Donat - Page not found</title>
            </Helmet>
            <Box sx={{height: '100vh', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", backgroundColor: theme.BoldTextColor, color: theme.BackgroundColor}}>
                <Box component="img" sx={{width: 200}} alt="White Logo Donat" src="/images/logo_white.png" />
                <Typography sx={{fontSize: 50, fontWeight: "bold"}}>PAGE NOT FOUND</Typography>
                <Typography sx={{fontWeight: "bold"}}>Oops! A pirate passing by stole all its contents!</Typography>
            </Box>
        </>
    );
};

export default Error404;