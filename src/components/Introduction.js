import { useContext } from "react";
import { ThemeContext } from "../utils/themes/ThemeContext";
import { Box, Button, Typography } from "@mui/material";

const Stat = ({main, secondary}) => {

    const {theme} = useContext(ThemeContext);

    return (
        <Box sx={{height: "70px", width: "300px", backgroundColor: theme.SecondBackgroundColor, margin: "2px", display: "flex", flexDirection: "column", padding: "10px", justifyContent: "center", alignItems: "center", textAlign: "center", borderRadius: "6px"}}>
            <Typography sx={{fontSize: 20, fontColor: theme.BoldTextColor, fontWeight: "bold"}}>{main}</Typography>
            <Typography sx={{fontSize: 15, fontColor: theme.SubTextColor}}>{secondary}</Typography>
        </Box>
    );
};

const Introduction = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <Box sx={{display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "space-around", alignItems: "center", textAlign: "center", backgroundColor: theme.BackgroundColor, paddingTop: "80px", paddingBottom: "80px"}}>
            <Box sx={{display: "flex", flexDirection: "column", textAlign: "left", justifyContent: "center", width: "60vh"}}>
                <Typography sx={{fontSize: 50, color: theme.BoldTextColor, fontWeight: "bold"}}>Hello, I'm Nathan Donat-Filliod</Typography>
                <Typography sx={{fontSize: 15, color: theme.ClassicTextColor, marginTop: "10px", marginBottom: "20px"}}>I'm a Freelance Developer based in Lyon, France. I spend my free time doing projects that I find interesting. Why not yours?</Typography>
                <Button href="#contact" sx={{width: "fit-content", textTransform: "none", backgroundColor: theme.MainColor, ":hover": {backgroundColor: theme.ClassicTextColor}, ":visited": {color: theme.BackgroundColor}, color: theme.BackgroundColor, fontSize: 15}}>Contact me</Button>
                <Box sx={{display: "flex", flexDirection: "row", marginTop: "50px", marginBottom: "50px", justifyContent: "left", alignItems: "center"}}>
                    <Stat
                        main={"4 Y."}
                        secondary={"Experience"}
                    />
                    <Stat
                        main={"25+"}
                        secondary={"Projects Completed"}
                    />
                    <Stat
                        main={"10+"}
                        secondary={"Languages"}
                    />
                </Box>
            </Box>
            <Box component="img" sx={{backgroundColor: theme.SecondBackgroundColor, borderRadius: "20px"}} alt={"Personal Picture"} src={"/images/me.png"} />
        </Box>
    );
};

export default Introduction;