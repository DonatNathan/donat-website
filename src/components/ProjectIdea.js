import { useContext } from "react";
import { ThemeContext } from "../utils/themes/ThemeContext";
import { Box, Button, Typography } from "@mui/material";
import { IoArrowForward } from "react-icons/io5";

const ProjectIdea = () => {

    const {theme} = useContext(ThemeContext);

    return(
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", backgroundColor: theme.BoldTextColor, color: theme.BackgroundColor, paddingTop: "80px", paddingBottom: "80px"}}>
            <Typography sx={{fontSize: 40, fontWeight: "bold"}}>Do you have Project Idea?</Typography>
            <Typography sx={{fontSize: 40, fontWeight: "bold"}}>Let's discuss your project!</Typography>
            <Button href="#contact" sx={{width: "fit-content", backgroundColor: theme.MainColor, ":hover": {backgroundColor: theme.ClassicTextColor}, ":visited": {color: theme.BackgroundColor}, color: theme.BackgroundColor, textTransform: "none", fontSize: 15, marginTop: "30px"}}>Let's work Together <IoArrowForward style={{marginLeft: "10px"}} size={20} /></Button>
        </Box>
    );
};

export default ProjectIdea;