import React from "react";
import { Helmet } from "react-helmet";
import { Title } from "../components/pages/PagesComp";
import { Box } from "@mui/material";
import { SocialIcon } from "react-social-icons";

const JobTaker = ({name, date}) => {
    return (
        <Box sx={{height: "200px", borderRadius: "10%", backgroundColor: "#FFFFFF", color: "#004AAD", opacity: 0.8, padding: "2%", margin: "3%", textAlign: "center", width: "15%", ":hover": {opacity: 1}}}>
            <Box sx={{height: "60%"}}>
                <h3>{name}</h3>
                <p>{date}</p>
            </Box>
            <img alt="Junior Conseil Taker logo" src="/images/Junior-Conseil-Taker.png" width="30%" />
        </Box>
    )
}

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Nathan Donat-Filliod</title>
            </Helmet>
            <Box sx={{background: 'linear-gradient(to bottom, #4884E8, #004AAD)', color: "white", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column"}}>
                <Box sx={{justifyContent: "center", display: "flex", flexDirection: "row"}}>
                    <img alt="White Donat Logo" src="/images/logo_white.png" width="15%" />
                    <Title>Nathan Donat-Filliod</Title>
                </Box>
                <Box sx={{alignItems: "center", display: "flex", flexDirection: "column"}}>
                    <h2>Junior Conseil Taker</h2>
                    <img alt="Junior Conseil Taker team" src="/images/CNE_flag.jpg" width="70%" />
                    <Box sx={{width: "70%", display: "flex", justifyContent: "space-around"}}>
                        <JobTaker name="Chargé d'Affaire" date="01/11/2022 - TODAY" />
                        <JobTaker name="Trésorier" date="07/05/2023 - 01/07/2024" />
                        <JobTaker name="Membre du Comité d'Orientation Stratégique" date="03/07/2024 - TODAY" />
                    </Box>
                </Box>
                <Box sx={{margin: "2%", alignItems: "center", display: "flex", flexDirection: "column"}}>
                    <h2>Contact</h2>
                    <Box sx={{width: "150%", display: "flex", justifyContent: "space-around"}}>
                        <SocialIcon url="https://www.linkedin.com/in/nathan-donat-filliod/" />
                        <SocialIcon url="https://github.com/DonatNathan" />
                        <SocialIcon url="https://www.instagram.com/nathandonatt/" />
                        <SocialIcon url="https://www.youtube.com/@donaaathan" />
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default HomePage;