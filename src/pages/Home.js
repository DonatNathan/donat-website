import React from "react";
import { Helmet } from "react-helmet";
import { Box, Typography } from "@mui/material";
import { SocialIcon } from "react-social-icons";
import Footer from "../modules/footer/Footer";

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

const TakerBlock = () => {
    return (
        <Box sx={{alignItems: "center", marginTop: "5%", display: "flex", flexDirection: "column", backgroundColor: "rgba(0, 0, 0, 0.7)"}}>
            <h2>Junior Conseil Taker</h2>
            <img alt="Junior Conseil Taker team" src="/images/CNE_flag.jpg" width="70%" />
            <Box sx={{width: "70%", display: "flex", justifyContent: "space-around"}}>
                <JobTaker name="Chargé d'Affaire" date="01/11/2022 - TODAY" />
                <JobTaker name="Trésorier" date="07/05/2023 - 01/07/2024" />
                <JobTaker name="Membre du Comité d'Orientation Stratégique" date="03/07/2024 - TODAY" />
            </Box>
        </Box>
    )
}

const ContactIconComponent = ({url}) => {
    return (
        <Box sx={{marginLeft: "10%", marginRight: "10%"}}>
            <SocialIcon url={url} />
        </Box>
    )
}

const ContactBlock = () => {
    return (
        <Box sx={{width: "90%", padding: "5%", alignItems: "center", display: "flex", flexDirection: "column", backgroundColor: "rgba(0, 0, 0, 0.7)"}}>
            <h2>Contact</h2>
            <Box sx={{display: "flex", justifyContent: "center"}}>
                <ContactIconComponent url="https://www.linkedin.com/in/nathan-donat-filliod/" />
                <ContactIconComponent url="https://github.com/DonatNathan" />
                <ContactIconComponent url="https://www.instagram.com/nathandonatt/" />
                <ContactIconComponent url="https://www.youtube.com/@donaaathan" />
            </Box>
        </Box>
    )
}

const HeaderBlock = () => {
    return (
        <Box sx={{width: "100%", position: "fixed", top: 0, justifyContent: "left", display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.9)"}}>
            <img alt="White Donat Logo" src="/images/logo_white.png" width="5%" />
            <Typography sx={{fontSize: "300%", fontWeight: "bold"}}>Donat</Typography>
        </Box>
    )
}

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Nathan Donat-Filliod</title>
            </Helmet>
            <Box sx={{background: 'rgba(0,0,0,0) url("images/water.jpg") fixed', backgroundSize: "cover", color: "white", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column"}}>
                <HeaderBlock />
                <TakerBlock />
                <ContactBlock />
                <Footer />
            </Box>
        </>
    );
};

export default HomePage;