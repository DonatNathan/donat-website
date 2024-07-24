import { Box, Typography } from "@mui/material";
import React from "react";
import { SocialIcon } from "react-social-icons";

const Project = ({name, description, link, path, type}) => {
    return (
        <>
            {type === "left" ?
                <Box sx={{display: "flex", flexWrap: "wrap", justifyContent: "space-around", margin: "5vh", border: "solid 3px white", borderRadius: "20px", padding: "1vh", backgroundColor: "rgba(255, 255, 255, 0.9)", color: "black"}}>
                    <img alt="name" src={`images/${path}`} width="30%" />
                    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-around", width: "100vh", alignItems: "center", marginTop: "5vh", marginBottom: "5vh", textAlign: "center"}}>
                        <Typography sx={{fontWeight: "bold", fontSize: "150%"}}>{name}</Typography>
                        <Typography sx={{fontSize: "120%", margin: "5vh"}}>{description}</Typography>
                        <SocialIcon url={link} />
                    </Box>
                </Box>
                    :
                <Box sx={{display: "flex", flexWrap: "wrap", justifyContent: "space-around", margin: "5vh", border: "solid 3px white", borderRadius: "20px", padding: "1vh", backgroundColor: "rgba(255, 255, 255, 0.9)", color: "black"}}>
                    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-around", width: "100vh", alignItems: "center", marginTop: "5vh", marginBottom: "5vh", textAlign: "center"}}>
                        <Typography sx={{fontWeight: "bold", fontSize: "150%"}}>{name}</Typography>
                        <Typography sx={{fontSize: "120%", margin: "5vh"}}>{description}</Typography>
                        <SocialIcon url={link} />
                    </Box>
                    <img alt="name" src={`images/${path}`} width="30%" />
                </Box>
            }
        </>
    )
}

const ProjetctsBlock = () => {
    return (
        <Box>
            <Project name="Map Generator" description="Un algorithm simple permettant de générer une map 2D. Il est possible de changer la taille ainsi que la répartition de celle-ci. Plus le nombre d'itération est grand, plus la map est simpliste, l'utilisateur peut donc tester chaque itération jusqu'à ce qu'elle soit conforme à ses attentes. Il peut ensuite exporter la map sous la forme d'un fichier texte." link="https://github.com/DonatNathan/2D-map-generator" path="generator.png" type="right" />
            <Project name="Image Compressor" description="L'Image Compressor consite à compresser drastiquement une image en réduisant son nombre de couleur. Ce programme a été développé en Haskell et utilise l'algorithm appelé K-Means. Il est possible de choisir le nombre de couleurs de l'image ainsi que sa convergence." link="https://github.com/DonatNathan/image-compressor" path="image-compressor.png" type="left" />
            <Project name="Wolfram" description="Implémentation de l'algorithm de Stephen Wolfram fait en Haskell. Le résultat est alors affiché dans le terminal." link="https://github.com/DonatNathan/wolfram" path="wolfram.png" type="right" />
            <Project name="Game Of Life" description="Implémentation des règles du Jeu de la Vie, l'automate cellulaire imaginé par John Conway dans un terminal. D'autres variantes sont aussi disponibles comme Hight Life, Day&Night ou Life 34." link="https://github.com/DonatNathan/game-of-life" path="game-of-life.png" type="left" />
            <Project name="RPG" description="Créer d'un jeux de type RPG grâce à la librairie CSFML du language C. Un éditeur de map est implémenté permettant aux joueurs de créer leur propre monde. Inventaire, objects, quêtes, colisions et combats, vous pourrez trouver tout ça dans ce petit jeu." link="https://github.com/DonatNathan/my-rpg" path="rpg.png" type="right" />
        </Box>
    )
}

const DevBlock = () => {
    return (
        <Box>
            <Box sx={{alignItems: "center", display: "flex", flexDirection: "column"}}>
                <Typography sx={{textAlign: "center", fontSize: "200%", fontWeight: "bold", margin: "1vh"}}>Projets</Typography>
                <Typography sx={{width: "70%", textAlign: "center", margin: "1vh", fontSize: "120%"}}>
                    Vous pouvez trouver ci-desssous quelques projets que j'ai pu réalisé, que ce soit au sein de mon parcours à Epitech ou encore des 
                    projets personnels dont j'ai eu l'idée.
                </Typography>
            </Box>
            <ProjetctsBlock />
        </Box>
    )
}

export default DevBlock;