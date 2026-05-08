import { useContext } from "react";
import { ThemeContext } from "../utils/themes/ThemeContext";
import { Box, Button, Typography } from "@mui/material";
import { IoArrowForward } from "react-icons/io5";

const ProjectIdea = () => {

    const {theme} = useContext(ThemeContext);

    return(
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", backgroundColor: theme.BackgroundColor, paddingTop: "80px", paddingBottom: "80px", minHeight: "calc(100vh - 120px)"}}>
            <Box sx={{maxWidth: "840px", width: "100%", padding: "40px", borderRadius: "20px", backgroundColor: theme.SecondBackgroundColor, border: `1px solid ${theme.MainColor}`, boxShadow: `0 24px 60px rgba(0, 0, 0, 0.12)`, transition: "transform 0.4s ease, box-shadow 0.4s ease", '&:hover': {transform: 'translateY(-6px)', boxShadow: `0 32px 80px rgba(0, 0, 0, 0.18)`}}}>
                <Typography sx={{fontSize: 16, fontWeight: "bold", color: theme.MainColor, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "18px"}}>Request accepted</Typography>
                <Typography sx={{fontSize: {xs: 32, md: 44}, fontWeight: "bold", color: theme.BoldTextColor, marginBottom: "20px", lineHeight: 1.05}}>
                    I can build whatever you want.
                </Typography>
                <Typography sx={{fontSize: 16, color: theme.ClassicTextColor, lineHeight: 1.8, marginBottom: "30px", maxWidth: "680px", marginX: "auto"}}>
                    From Palantir Foundry platforms to websites, mobile apps and custom software, I create the tools that make decisions easier, faster and more reliable.
                </Typography>
                <Box sx={{display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px", marginBottom: "35px"}}>
                    {['Foundry', 'Web', 'Mobile', 'Software'].map((tag) => (
                        <Box key={tag} sx={{padding: "10px 18px", borderRadius: "999px", backgroundColor: theme.BackgroundColor, color: theme.BoldTextColor, fontSize: 12, fontWeight: "bold", letterSpacing: "1px", textTransform: "uppercase", border: `1px solid ${theme.SecondBackgroundColor}`}}>{tag}</Box>
                    ))}
                </Box>
                <Button href="#contact" sx={{width: "fit-content", backgroundColor: theme.MainColor, color: theme.BackgroundColor, textTransform: "uppercase", fontSize: 14, padding: "14px 34px", fontWeight: "bold", letterSpacing: "1px", border: `1px solid ${theme.MainColor}`, transition: "background-color 0.3s ease, transform 0.3s ease", '&:hover': {backgroundColor: theme.BackgroundColor, color: theme.BoldTextColor, transform: 'translateY(-2px)', border: `1px solid ${theme.MainColor}`}}}>
                    Start the build <IoArrowForward style={{marginLeft: "10px"}} size={20} />
                </Button>
            </Box>
        </Box>
    );
};

export default ProjectIdea;