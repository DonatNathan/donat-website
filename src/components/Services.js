import { Box, Button, Typography } from "@mui/material";
import { ThemeContext } from "../utils/themes/ThemeContext";
import { useContext } from "react";

const Service = ({name, description}) => {

    const {theme} = useContext(ThemeContext);

    return (
        <Box sx={{backgroundColor: theme.BackgroundColor, textAlign: "left", padding: "10px", width: "50vh", borderLeft: 3, borderLeftColor: theme.MainColor, borderRadius: "6px", margin: "10px"}}>
            <Typography sx={{fontSize: 20, fontWeight: "bold", color: theme.BoldTextColor}}>{name}</Typography>
            <Typography sx={{fontSize: 15, color: theme.ClassicTextColor}}>{description}</Typography>
        </Box>
    )
}

const Services = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <Box sx={{display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "space-around", alignItems: "center", textAlign: "center", backgroundColor: theme.SecondBackgroundColor, paddingTop: "80px", paddingBottom: "80px"}}>
            <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "left", textAlign: "left", width: "50vh", marginBottom: "30px"}}>
                <Typography sx={{fontSize: 40, fontWeight: "bold", color: theme.BoldTextColor}}>What I do?</Typography>
                <Typography sx={{fontSize: 15, color: theme.ClassicTextColor, marginTop: "15px", marginBottom: "15px"}}>I offer comprehensive development services for any project like websites, mobile apps, software, and even video games. <br /><br />With a versatile skill set across platforms and technologies, I bring ideas to life with solutions tailored to your goals, ensuring seamless performance, engaging user experiences, and long-term success.</Typography>
                <Button sx={{width: "fit-content", backgroundColor: theme.MainColor, color: theme.BackgroundColor, textTransform: "none", fontSize: 15, marginTop: "10px"}}>See what I did</Button>
            </Box>
            <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <Service
                    name={"Software Development"}
                    description={"I provide tailored software development services to build robust, scalable solutions that streamline operations, enhance productivity, and meet your unique business needs."}
                />
                <Service
                    name={"Mobile Development"}
                    description={"I offer custom mobile app development services to create intuitive, high-performance applications that connect with your audience on any device, enhancing user engagement and driving business growth."}
                />
                <Service
                    name={"Web Development"}
                    description={"I provide custom web development services to build engaging, user-friendly, and secure websites tailored to meet your business goals and deliver exceptional digital experiences."}
                />
            </Box>
        </Box>
    );
};

export default Services;