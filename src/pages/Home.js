import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Box, Button, Typography, IconButton } from "@mui/material";
import { SocialIcon } from "react-social-icons";
import Footer from "../modules/footer/Footer";
import Header from "../modules/header/Header";
import TakerBlock from "./Taker";
import SoonBlock from "./Soon";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ContactIconComponent = ({url}) => {
    return (
        <Box sx={{marginLeft: "10%", marginRight: "10%"}}>
            <SocialIcon url={url} />
        </Box>
    )
}

const ContactBlock = () => {
    return (
        <Box sx={{width: "90%", paddingLeft: "5%", paddingRight: "5%", paddingBottom: "3%", paddingTop: "3%", alignItems: "center", display: "flex", flexDirection: "column", backgroundColor: "rgba(0, 0, 0, 0.7)"}}>
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

const LittleImage = ({path, description}) => {
    return (
        <img alt={description} src={path} />
    )
}

const SubPageBlock = ({title, value, setPageBlock, description}) => {

    const onButtonClick = () => {
        setPageBlock(value);
    }

    return (
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "auto", borderRadius: "10%", backgroundColor: "#FFFFFF", color: "#004AAD", opacity: 0.8, padding: "2%", marginTop: "3%", textAlign: "center", width: "15%", ":hover": {opacity: 1}}}>
            <Typography sx={{fontWeight: "bold", fontSize: "200%", marginBottom: "5%"}}>{title}</Typography>
            <Typography sx={{}}>{description}</Typography>
            <LittleImage path={`images/${value}.jpg`} description={description} />
            <Button onClick={onButtonClick} variant="contained" sx={{marginTop: "5%"}}>Voir</Button>
        </Box>
    )
}

const HomeBlock = ({setPageBlock}) => {
    return (
        <Box sx={{width: "100%", marginTop: "5%", display: "flex", justifyContent: "space-around", backgroundColor: "rgba(0, 0, 0, 0.7)"}}>
            <SubPageBlock title="Taker" value="taker" setPageBlock={setPageBlock} description="Junior Entreprise dans laquelle j'ai eu l'occasion d'occuper plusieurs postes pendant mes années d'études à Epitech." />
            <SubPageBlock title="Dev" value="dev" setPageBlock={setPageBlock} description="Une présentation des projets dont je suis le plus fière, mélangeant de nombreux domaines différents." />
            <SubPageBlock title="Passions" value="passion" setPageBlock={setPageBlock} description="Apprenez en un peu plus sur moi grâce à mes différentes passions : les pirates, les bateaux et l'océan en général !" />
        </Box>
    )
}

const MainBlock = ({pageBlock, setPageBlock}) => {

    const arrowOnClick = () => {
        setPageBlock("menu");
    }

    return (
        <>
            {pageBlock !== "menu" && <Box sx={{paddingTop: "1%", width: "100%", marginTop: "5%", backgroundColor: "rgba(0, 0, 0, 0.7)", display: "flex", justifyContent: "center"}}><IconButton onClick={arrowOnClick} sx={{color: "white", backgroundColor: "rgba(255, 255, 255, 0.1)"}}><ArrowBackIcon /></IconButton></Box>}
            {
                pageBlock === "menu" ? <HomeBlock setPageBlock={setPageBlock} /> : 
                pageBlock === "taker" ? <TakerBlock /> :
                pageBlock === "dev" ? <SoonBlock /> :
                pageBlock === "passion" ? <SoonBlock /> : <Box></Box>
            }
        </>
    )
}

const HomePage = () => {

    const [pageBlock, setPageBlock] = useState("menu");

    console.log(pageBlock);

    return (
        <>
            <Helmet>
                <title>Nathan Donat-Filliod</title>
            </Helmet>
            <Box sx={{background: 'rgba(0,0,0,0) url("images/water.jpg") fixed', backgroundSize: "cover", color: "white", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column"}}>
                <Header />
                <MainBlock pageBlock={pageBlock} setPageBlock={setPageBlock} />
                <ContactBlock />
                <Footer />
            </Box>
        </>
    );
};

export default HomePage;