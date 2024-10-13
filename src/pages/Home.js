import React from "react";
import { Helmet } from "react-helmet";
import { Box, Button, Typography } from "@mui/material";
import Footer from "../modules/footer/Footer";
import Header from "../modules/header/Header";
import { useNavigate } from "react-router-dom";
import ContactBlock from "../modules/footer/Contact";

const LittleImage = ({path, description}) => {
    return (
        <img alt={description} src={path} width="90%" />
    )
}

const SubPageBlock = ({title, value, description, navigate}) => {

    const onButtonClick = () => {
        navigate("/" + value);
    }

    return (
        <Box sx={{margin: "5%", minWidth: 200, maxWidth: 500, display: "flex", flexGrow: 1, flexDirection: "column", alignItems: "center", justifyContent: "space-between", height: "auto", borderRadius: "20px", backgroundColor: "#FFFFFF", color: "#004AAD", padding: "2vh", textAlign: "center", width: "15%", ":hover": {opacity: 1}}}>
            <Typography sx={{fontWeight: "bold", fontSize: "200%", marginBottom: "5%"}}>{title}</Typography>
            <Typography sx={{marginBottom: "5%"}}>{description}</Typography>
            <LittleImage path={`images/${value}.jpg`} description={description} />
            <Button onClick={onButtonClick} variant="contained" sx={{marginTop: "5%", width: "70%"}}>Read more</Button>
        </Box>
    )
}

const HomeBlock = () => {

    const navigate = useNavigate();

    return (
        <Box sx={{width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
            <SubPageBlock navigate={navigate} title="Junior Conseil Taker" value="taker" description="Discover the Junior in which I had the opportunity to occupy several positions during my years of study at Epitech." />
            <SubPageBlock navigate={navigate} title="Projects" value="dev" description="A presentation of the projects I am most proud of, mixing many different fields." />
            {/* <SubPageBlock navigate={navigate} title="Passions" value="passion" description="Apprenez en un peu plus sur moi grâce à mes différentes passions : les pirates, les bateaux et l'océan en général !" /> */}
        </Box>
    )
}

const Me = () => {
    return (
        <Box sx={{border: "solid 5px white", borderRadius: "20px", margin: "2vh", marginTop: "20vh", display: "flex", flexWrap: "wrap", justifyContent: "space-around", alignItems: "center"}}>
            <Typography sx={{fontSize: "150%", marginBottom: "2vh", textAlign: "center", padding: "1vh"}}>Nice to meet you, my name is Nathan and I am a Freelance developer. <br />A project idea? Contact me!</Typography>
            <img alt="Nathan Donat-Filliod" src="images/me-removebg.png" width="30%" />
        </Box>
    )
}

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Nathan Donat-Filliod</title>
            </Helmet>
            <Box sx={{background: 'rgba(0,0,0,0) url("images/water.jpg") fixed', backgroundSize: "cover"}}>
                <Box sx={{height: "100%", backgroundColor: 'rgba(0,0,0,0.6)', color: "white", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", flexFlow: "column"}}>
                    <Header />
                    <Me />
                    <HomeBlock />
                    <ContactBlock />
                    <Footer />
                </Box>
            </Box>
        </>
    );
};

export default HomePage;