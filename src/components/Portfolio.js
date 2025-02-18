import { Box, Button, Typography } from "@mui/material";
import { ThemeContext } from "../utils/themes/ThemeContext";
import { useContext } from "react";
import { IoArrowForward } from "react-icons/io5";

const Project = ({type, name, description, path, link}) => {

    const {theme} = useContext(ThemeContext);

    return (
        <Box sx={{width: "50vh", backgroundColor: theme.BackgroundColor, border: 2, borderRadius: "8px", margin: "10px", borderColor: theme.SecondBackgroundColor}}>
            <Box component="img" sx={{width: "100%", borderRadius: "8px", height: "250px", objectFit: "cover"}} alt={name} src={path} />
            <Box sx={{display: "flex", flexDirection: "column", textAlign: "left", padding: "30px"}}>
                <Typography sx={{fontSize: 12, color: theme.SubTextColor}}>{type}</Typography>
                <Typography sx={{fontSize: 20, color: theme.BoldTextColor, fontWeight: "bold"}}>{name}</Typography>
                <Typography sx={{fontSize: 15, color: theme.ClassicTextColor, marginTop: "15px", marginBottom: "15px"}}>{description}</Typography>
                <Button href={link} variant="outlined" sx={{width: "fit-content", textTransform: "none"}}>Case Study <IoArrowForward style={{marginLeft: "10px"}} /></Button>
            </Box>
        </Box>
    );
};

const Portfolio = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <Box id="portfolio" sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", backgroundColor: theme.BackgroundColor, paddingTop: "80px", paddingBottom: "80px"}}>
            <Typography sx={{fontSize: 40, fontWeight: "bold", color: theme.BoldTextColor}}>Portfolio</Typography>
            <Typography sx={{fontSize: 15, color: theme.ClassicTextColor, marginBottom: "40px"}}>You can find some of the many projects I have been able to carry out since my beginnings in computer development.</Typography>
            <Box sx={{ display: "flex", flexWrap: 'wrap', justifyContent: "center" }}>
                <Project 
                    type={"Haskell Algorithm"}
                    name={"Image Compressor"}
                    description={"A tool to reduce the file size of images and the number of color used using k-means algorithm."}
                    path={"/images/image-compressor.png"}
                    link={"https://github.com/DonatNathan/image-compressor"}
                />
                <Project 
                    type={"Web Development"}
                    name={"This website ;)"}
                    description={"My personal website where I share projects I develop and where I found new projects."}
                    path={"/images/website.png"}
                    link={"https://github.com/DonatNathan/donat-website"}
                />
                <Project 
                    type={"Haskell Algorithm"}
                    name={"Wolfram"}
                    description={"A tool that implement the Wolfram algorithm and display it in the terminal."}
                    path={"/images/wolfram.png"}
                    link={"https://github.com/DonatNathan/wolfram"}
                />
                <Project 
                    type={"Video Game Development"}
                    name={"Small RPG"}
                    description={"A small 2D video game developed in C using CSFML library where you are a pirate."}
                    path={"/images/rpg.png"}
                    link={"https://github.com/DonatNathan/my-rpg"}
                />
                <Project 
                    type={"C++ Development"}
                    name={"R-Type Game Engine"}
                    description={"Game engine that can be used to develop some different games."}
                    path={"/images/r-type.png"}
                    link={"https://github.com/DonatNathan/r-type"}
                />
                <Project 
                    type={"C++ Development"}
                    name={"2D Map Generator"}
                    description={"A small C++ algorithm that can be used to generate 2D video game map."}
                    path={"/images/generator.png"}
                    link={"https://github.com/DonatNathan/2D-map-generator"}
                />
            </Box>
            <Button href="https://github.com/DonatNathan" sx={{width: "fit-content", backgroundColor: theme.MainColor, ":hover": {backgroundColor: theme.ClassicTextColor}, ":visited": {color: theme.BackgroundColor}, color: theme.BackgroundColor, textTransform: "none", fontSize: 15, marginTop: "50px"}}>More Projects</Button>
        </Box>
    );
};

export default Portfolio;