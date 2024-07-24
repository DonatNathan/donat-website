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
        <Box sx={{height: "15vh", width: "90%", paddingLeft: "5%", paddingRight: "5%", paddingBottom: "3%", paddingTop: "3%", alignItems: "center", display: "flex", flexDirection: "column", backgroundColor: "rgba(0, 0, 0, 0.7)"}}>
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
        <img alt={description} src={path} width="90%" />
    )
}

const SubPageBlock = ({title, value, setPageBlock, description}) => {

    const onButtonClick = () => {
        setPageBlock(value);
    }

    return (
        <Box sx={{margin: "5%", minWidth: 200, maxWidth: 500, display: "flex", flexGrow: 1, flexDirection: "column", alignItems: "center", justifyContent: "space-between", height: "auto", borderRadius: "20px", backgroundColor: "#FFFFFF", color: "#004AAD", padding: "2vh", textAlign: "center", width: "15%", ":hover": {opacity: 1}}}>
            <Typography sx={{fontWeight: "bold", fontSize: "200%", marginBottom: "5%"}}>{title}</Typography>
            <Typography sx={{}}>{description}</Typography>
            <LittleImage path={`images/${value}.jpg`} description={description} />
            <Button onClick={onButtonClick} variant="contained" sx={{marginTop: "5%", width: "70%"}}>Voir</Button>
        </Box>
    )
}

const HomeBlock = ({setPageBlock}) => {
    return (
        <Box sx={{width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
            <SubPageBlock title="Taker" value="taker" setPageBlock={setPageBlock} description="Junior Entreprise dans laquelle j'ai eu l'occasion d'occuper plusieurs postes durant mes années d'études à Epitech." />
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
            {pageBlock !== "menu" && <Box sx={{paddingTop: "1%", width: "100%", display: "flex", justifyContent: "center"}}><IconButton onClick={arrowOnClick} sx={{color: "white", backgroundColor: "rgba(255, 255, 255, 0.1)"}}><ArrowBackIcon /></IconButton></Box>}
            <Box sx={{width: "100%", display: "flex", flexDirection: "column"}}>
                {
                    pageBlock === "menu" ? <HomeBlock setPageBlock={setPageBlock} /> : 
                    pageBlock === "taker" ? <TakerBlock /> :
                    pageBlock === "dev" ? <SoonBlock /> :
                    pageBlock === "passion" ? <SoonBlock /> : <Box></Box>
                }
            </Box>
        </>
    )
}

const Me = () => {
    return (
        <Box sx={{border: "solid 5px white", borderRadius: "20px", margin: "2vh", marginTop: "20vh", display: "flex", flexWrap: "wrap", justifyContent: "space-around", alignItems: "center"}}>
            <Typography sx={{fontSize: "20px", marginBottom: "2vh", textAlign: "center"}}>Enchanté, je m'appelle Nathan et je suis développeur.</Typography>
            <img alt="Nathan Donat-Filliod" src="images/me-removebg.png" width="30%" />
        </Box>
    )
}

const HomePage = () => {

    const [pageBlock, setPageBlock] = useState("menu");

    return (
        <>
            <Helmet>
                <title>Nathan Donat-Filliod</title>
            </Helmet>
            <Box sx={{background: 'rgba(0,0,0,0) url("images/water.jpg") fixed', backgroundSize: "cover"}}>
                <Box sx={{height: "100%", backgroundColor: 'rgba(0,0,0,0.6)', color: "white", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", flexFlow: "column"}}>
                    <Header />
                    <Me />
                    <MainBlock pageBlock={pageBlock} setPageBlock={setPageBlock} />
                    <ContactBlock />
                    <Footer />
                </Box>
            </Box>
        </>
    );
};

export default HomePage;