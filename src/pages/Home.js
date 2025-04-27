import React from "react";
import { Helmet } from "react-helmet";
import { Box } from "@mui/material";
import ProjectIdea from "../components/ProjectIdea";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Footer from "../modules/footer/Footer";
import Header from "../modules/header/Header";
import Introduction from "../components/Introduction";
import Process from "../components/Process";
import Contact from "../components/Contact";

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Nathan Donat-Filliod</title>
            </Helmet>
            <Box>
                <Header />
                <Introduction />
                <Process />
                <Portfolio />
                <ProjectIdea />
                <Services />
                <Contact />
                <Footer />
            </Box>
        </>
    );
};

export default HomePage;