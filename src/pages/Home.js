import React from "react";
import { Helmet } from "react-helmet";
import { Box } from "@mui/material";
import ProjectIdea from "../components/ProjectIdea";
import Portfolio from "../components/Portfolio";

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Nathan Donat-Filliod</title>
            </Helmet>
            <Box>
                    <Portfolio />
                    <ProjectIdea />
            </Box>
        </>
    );
};

export default HomePage;