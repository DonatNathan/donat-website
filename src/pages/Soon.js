import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { ThemeContext } from "../utils/themes/ThemeContext";

const SoonPage = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <>
            <Helmet>
                <title>Donat - Soon</title>
            </Helmet>
            <Box sx={{height: '100vh', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", backgroundColor: theme.BoldTextColor, color: theme.BackgroundColor}}>
                <Box component="img" sx={{width: 200}} alt="White Logo Donat" src="/images/logo_white.png" />
                <Typography sx={{fontSize: 50, fontWeight: "bold"}}>Coming Soon... Pirate...</Typography>
            </Box>
        </>
    )
}

export default SoonPage;