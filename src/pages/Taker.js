import React from "react";
import { Box } from "@mui/material"

const JobTaker = ({name, date}) => {
    return (
        <Box sx={{height: "200px", flexGrow: 1, minWidth: 200, maxWidth: 250, margin: "5%", borderRadius: "20px", backgroundColor: "#FFFFFF", color: "#004AAD", opacity: 0.8, padding: "2%", textAlign: "center", width: "15%", ":hover": {opacity: 1}}}>
            <Box sx={{height: "60%"}}>
                <h3>{name}</h3>
                <p>{date}</p>
            </Box>
            <img alt="Junior Conseil Taker logo" src="/images/Junior-Conseil-Taker.png" width="50px" />
        </Box>
    )
}

const TakerBlock = () => {
    return (
        <Box sx={{alignItems: "center", display: "flex", flexDirection: "column", backgroundColor: "rgba(0, 0, 0, 0.7)"}}>
            <h2>Junior Conseil Taker</h2>
            <img alt="Junior Conseil Taker team" src="/images/taker-cne.jpg" width="70%" />
            <Box sx={{width: "70%", display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
                <JobTaker name="Chargé d'Affaire" date="01/11/2022 - TODAY" />
                <JobTaker name="Trésorier" date="07/05/2023 - 01/07/2024" />
                <JobTaker name="Membre du Comité d'Orientation Stratégique" date="03/07/2024 - TODAY" />
            </Box>
        </Box>
    )
}

export default TakerBlock;