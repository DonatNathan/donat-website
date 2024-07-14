import { Box } from "@mui/material";
import React from "react";

const SoonBlock = () => {
    return (
        <Box sx={{height: "61vh", width: "100%", alignItems: "center", display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.7)"}}>
            <img alt="Ship" src="images/soon_page.png" style={{width: "40%", minWidth: "300px"}} />
        </Box>
    )
}

export default SoonBlock;