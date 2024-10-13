import { Box, Typography } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";
import { SocialIcon } from "react-social-icons";
import Header from "../modules/header/Header";
import Footer from "../modules/footer/Footer";
import ContactBlock from "../modules/footer/Contact";

const Project = ({name, description, link, path, type}) => {
    return (
        <Box sx={{minWidth: 200, maxWidth: 500, display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", margin: "5vh", border: "solid 3px white", borderRadius: "20px", padding: "1vh", backgroundColor: "rgba(255, 255, 255, 0.9)", color: "black"}}>
            <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", marginTop: "5vh", marginBottom: "5vh", textAlign: "center"}}>
                <Typography sx={{fontWeight: "bold", fontSize: "150%"}}>{name}</Typography>
                <Typography sx={{fontSize: "120%", margin: "5vh"}}>{description}</Typography>
                <SocialIcon url={link} />
            </Box>
            <img alt={name} src={`images/${path}`} width="30%" />
        </Box>
    )
}

const ProjectsBlock = () => {
    return (
        <Box sx={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            <Project name="Map Generator" description="A simple algorithm to generate a 2D map. It is possible to change the size and distribution of the map. The greater the number of iterations, the simpler the map, so the user can test each iteration until it meets his expectations. He can then export the map as a text file." link="https://github.com/DonatNathan/2D-map-generator" path="generator.png" type="right" />
            <Project name="Image Compressor" description="Image Compressor consists of drastically compressing an image by reducing its number of colors. This program was developed in Haskell and uses the algorithm called K-Means. It is possible to choose the number of colors in the image as well as its convergence." link="https://github.com/DonatNathan/image-compressor" path="image-compressor.png" type="left" />
            <Project name="Wolfram" description="Implementation of Stephen Wolfram's algorithm done in Haskell. The result is then displayed in the terminal." link="https://github.com/DonatNathan/wolfram" path="wolfram.png" type="right" />
            <Project name="Game Of Life" description="Implementation of the rules of the Game of Life, the cellular automaton imagined by John Conway in a terminal. Other variants are also available like Hight Life, Day&Night or Life 34." link="https://github.com/DonatNathan/game-of-life" path="game-of-life.png" type="left" />
            <Project name="RPG" description="Creation of an RPG type game using the CSFML library of the C language. A map editor is implemented allowing players to create their own world. Inventory, objects, quests, collisions and fights, you can find all that in this little game." link="https://github.com/DonatNathan/my-rpg" path="rpg.png" type="right" />
        </Box>
    )
}

const DevBlock = () => {
    return (
        <Box sx={{marginTop: "15vh"}}>
            {/* <Box sx={{alignItems: "center", display: "flex", flexDirection: "column"}}>
                <Typography sx={{textAlign: "center", fontSize: "200%", fontWeight: "bold", margin: "1vh"}}>Projets</Typography>
                <Typography sx={{width: "70%", textAlign: "center", margin: "1vh", fontSize: "120%"}}>
                    Vous pouvez trouver ci-desssous quelques projets que j'ai pu réalisé, que ce soit au sein de mon parcours à Epitech ou encore des 
                    projets personnels dont j'ai eu l'idée.
                </Typography>
            </Box> */}
            <ProjectsBlock />
        </Box>
    )
}

const DevPage = () => {
    return (
        <>
            <Helmet>
                <title>Projets - Donat</title>
            </Helmet>
            <Box sx={{background: 'rgba(0,0,0,0) url("images/water.jpg") fixed', backgroundSize: "cover"}}>
                <Box sx={{height: "100%", backgroundColor: 'rgba(0,0,0,0.6)', color: "white", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", flexFlow: "column"}}>
                    <Header />
                    <DevBlock />
                    <ContactBlock />
                    <Footer />
                </Box>
            </Box>
        </>
    );
}

export default DevPage;