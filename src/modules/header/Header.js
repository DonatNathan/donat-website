import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const headerOnClick = () => {
        navigate("/");
    }

    return (
        <Box sx={{zIndex: 1, height: "10vh", width: "100%", position: "fixed", top: 0, boxShadow: "0 1px 10px white", display: "flex", justifyContent: "left", backgroundColor: "rgba(0, 0, 0, 1)", alignItems: "center"}}>
            <Box onClick={headerOnClick} sx={{'&:hover': {cursor: "pointer"}, display: "flex", flexDirection: "row", alignItems: "center"}}>
                <img alt="White Donat Logo" src="/images/logo_white.png" width="70px" />
                <Typography sx={{fontSize: "300%", fontWeight: "bold"}}>Donat</Typography>
            </Box>
        </Box>
    )
}

export default Header;