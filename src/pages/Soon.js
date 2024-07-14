import { Box } from "@mui/material";
import React from "react";

const SoonBlock = () => {
    return (
        <Box sx={{width: "100%", flex: "1 1 auto", alignItems: "center", display: "flex", flexDirection: "column", backgroundColor: "rgba(0, 0, 0, 0.7)"}}>
            <img alt="Ship" src="images/soon_page.png" style={{width: "40%", minWidth: "300px"}} />
        </Box>
    )
}

export default SoonBlock;