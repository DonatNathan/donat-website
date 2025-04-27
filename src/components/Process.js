import { Box, Typography } from "@mui/material"
import { ThemeContext } from "../utils/themes/ThemeContext";
import { useContext } from "react";
import { IoCodeSlash } from "react-icons/io5";
import { IoLaptopOutline } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { IoStatsChartOutline } from "react-icons/io5";

const Step = ({name, description, icon}) => {

    const {theme} = useContext(ThemeContext);

    return (
        <Box sx={{":hover": {boxShadow: `-5px -5px 5px ${theme.BackgroundColor}, 5px 5px 5px ${theme.BackgroundColor}, 5px -5px 5px ${theme.BackgroundColor}, -5px 5px 5px ${theme.BackgroundColor}`, transitionDuration: "0.8s"}, transitionDuration: "0.8s", height: "25vh", width: "25vh", backgroundColor: theme.BackgroundColor, display: "flex", flexDirection: "column", padding: "30px", justifyContent: "center", textAlign: "left", margin: "10px", borderRadius: "12px"}}>
            <Box sx={{width: "fit-content", padding: "20px", backgroundColor: theme.SecondBackgroundColor, borderRadius: "6px"}}>
                {
                    icon === "development" ? 
                        <IoCodeSlash size={30} color={theme.MainColor} />
                    : icon === "research" ? 
                        <IoCalendarOutline size={30} color={theme.MainColor} />
                    : icon === "analyze" ? 
                        <IoStatsChartOutline size={30} color={theme.MainColor} />
                    :
                        <IoLaptopOutline size={30} color={theme.MainColor} />
                }
            </Box>
            <Typography sx={{fontSize: 20, color: theme.BoldTextColor, fontWeight: "bold", marginTop: "30px", marginBottom: "10px"}}>{name}</Typography>
            <Typography sx={{fontSize: 15, color: theme.ClassicTextColor}}>{description}</Typography>
        </Box>
    );
};

const Process = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <Box id="process" sx={{display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "space-around", alignItems: "center", backgroundColor: theme.SecondBackgroundColor, paddingTop: "80px", paddingBottom: "80px"}}>
            <Box sx={{width: "30vw", minWidth: "300px", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "left"}}>
                <Typography sx={{fontSize: 40, color: theme.BoldTextColor, fontWeight: "bold"}}>Work Process</Typography>
                <Typography sx={{fontSize: 15, color: theme.ClassicTextColor, marginTop: "10px", marginBottom: "20px"}}>In my process, I focus on understanding your vision, planning strategically, and delivering results. <br /><br />From initial brainstorming to design, development, and testing, I work closely with you at each stage to ensure the project aligns with your goals. <br /><br />I emphasize transparency, adaptability, and quality, so you stay informed, and your solution is built to succeed.</Typography>
            </Box>
            <Box sx={{display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <Step
                        name={"1. Research"}
                        description={"I dive into understanding your goals, audience, and competition for your project."}
                        icon={"research"}
                    />
                    <Step
                        name={"3. Development"}
                        description={"I bring the design to life with clean, efficient and optimised code."}
                        icon={"development"}
                    />
                </Box>
                <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "50px"}}>
                    <Step
                        name={"2. Analyze"}
                        description={"I develop a clear strategy and a roadmap to guide well your project."}
                        icon={"analyze"}
                    />
                    <Step
                        name={"4. Launch"}
                        description={"I deploy the project, ensuring everything runs smoothly and meets expectations."}
                        icon={"launch"}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Process;