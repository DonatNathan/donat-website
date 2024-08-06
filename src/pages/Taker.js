import React from "react";
import { Box, Typography } from "@mui/material"
import { Helmet } from "react-helmet";
import Header from "../modules/header/Header";
import Footer from "../modules/footer/Footer";
import ContactBlock from "../modules/footer/Contact";

const JobTaker = ({name, date}) => {
    return (
        <Box sx={{height: "200px", flexGrow: 1, minWidth: 200, maxWidth: 250, marginLeft: "5%", marginRight: "5%", marginBottom: "5%", borderRadius: "20px", backgroundColor: "#FFFFFF", color: "#004AAD", opacity: 0.8, padding: "2%", textAlign: "center", width: "15%", ":hover": {opacity: 1}}}>
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
        <Box sx={{alignItems: "center", display: "flex", flexDirection: "column", marginTop: "15vh"}}>
            <Typography sx={{textAlign: "center", fontSize: "200%", fontWeight: "bold", margin: "1vh"}}>Junior Conseil Taker</Typography>
            <Typography sx={{width: "70%", textAlign: "center", margin: "1vh", fontSize: "120%"}}>
                Junior Conseil Taker est une association évoluant au sein de l’école d’informatique EPITECH. Son objectif premier est de compléter et 
                prolonger l’enseignement théorique de ses membres par une expérience pratique tout en permettant de mettre en application les différents 
                enseignements dispensés aux étudiants de l’école. La Junior offre à ses clients trois types de prestations : <b>développement</b>, <b>conseil</b> et <b>audit</b>.
            </Typography>
            <Typography sx={{marginBottom: "30px"}}><a href="https://juniortaker.com/">En savoir plus.</a></Typography>
            <img alt="Junior Conseil Taker team" src="/images/taker-cne.jpg" width="70%" />
            <Typography sx={{fontSize: "30px", marginTop: "50px", marginBottom: "10px", fontWeight: "bold"}}>Postes occupés :</Typography>
            <Box sx={{width: "70%", display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
                <JobTaker name="Chargé d'Affaire" date="01/11/2022 - TODAY" />
                <JobTaker name="Trésorier" date="07/05/2023 - 01/07/2024" />
                <JobTaker name="Membre du Comité d'Orientation Stratégique" date="03/07/2024 - TODAY" />
            </Box>
        </Box>
    )
}

const TakerPage = () => {
    return (
        <>
            <Helmet>
                <title>Taker - Donat</title>
            </Helmet>
            <Box sx={{background: 'rgba(0,0,0,0) url("images/water.jpg") fixed', backgroundSize: "cover"}}>
                <Box sx={{height: "100%", backgroundColor: 'rgba(0,0,0,0.6)', color: "white", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", flexFlow: "column"}}>
                    <Header />
                    <TakerBlock />
                    <ContactBlock />
                    <Footer />
                </Box>
            </Box>
        </>
    );
}

export default TakerPage;