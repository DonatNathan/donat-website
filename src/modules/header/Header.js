import { Box, Typography } from "@mui/material";
import React from "react";

const Header = () => {

    const headerOnClick = () => {
        
    }

    return (
        <Box onClick={headerOnClick} sx={{zIndex: 1, width: "100%", position: "fixed", top: 0, boxShadow: "0 1px 10px white", justifyContent: "left", display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 1)"}}>
            <img alt="White Donat Logo" src="/images/logo_white.png" width="5%" />
            <Typography sx={{fontSize: "300%", fontWeight: "bold"}}>Donat</Typography>
        </Box>
    )
}

export default Header;