import React from "react";
import { Helmet } from "react-helmet";
import { Box, Typography } from "@mui/material";
import Header from "../modules/header/Header";
import Footer from "../modules/footer/Footer";

const Error404 = () => {
    return (
        <>
            <Helmet>
                <title>Donat - Page not found</title>
            </Helmet>
            <Box sx={{background: 'rgba(0,0,0,0) url("images/water.jpg") fixed', backgroundSize: "cover", color: "white", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column"}}>
                <Header />
                <Box sx={{width: "90%", padding: "5%", textAlign: "center", marginTop: "5%", backgroundColor: "rgba(255, 255, 255, 0.6)", color: "black"}}>
                    <img alt="404 error" src="images/404.png" style={{width: "40%", minWidth: "300px"}} />
                    <Typography sx={{fontSize: "250%", fontWeight: "bold", marginTop: "3%"}}>PAGE NOT FOUND</Typography>
                    <Typography>Oops ! Un pirate passant par là a volé tout son contenu !</Typography>
                </Box>
                <Footer />
            </Box>
        </>
    );
};

export default Error404;