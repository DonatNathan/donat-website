import { Box, Button, FormControl, TextField, Typography } from "@mui/material"
import { ThemeContext } from "../utils/themes/ThemeContext";
import { useContext } from "react";
import { IoSendOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";

const Info = ({name, value, icon}) => {

    const {theme} = useContext(ThemeContext);

    return (
        <Box sx={{display: "flex", flexDirection: "row", justifyContent: "left", margin: "20px"}}>
            <Box sx={{width: "fit-content", padding: "10px", backgroundColor: theme.SecondBackgroundColor, borderRadius: "4px"}}>
                {
                    icon === "address" ?
                        <IoLocationOutline size={20} color={theme.MainColor} />
                    : icon === "email" ? 
                        <IoMailOutline size={20} color={theme.MainColor} />
                    : 
                        <IoCallOutline size={20} color={theme.MainColor} /> 
                }
            </Box>
            <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "left", marginLeft: "10px"}}>
                <Typography sx={{fontSize: 15, color: theme.ClassicTextColor}}>{name}</Typography>
                <Typography sx={{fontSize: 15, color: theme.BoldTextColor, fontWeight: "bold"}}>{value}</Typography>
            </Box>
        </Box>
    );
};

const Contact = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <Box sx={{display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "space-around", alignItems: "center", backgroundColor: theme.BackgroundColor, padding: "80px", boxShadow: `-20px -20px 20px ${theme.SecondBackgroundColor}, 20px -20px 20px ${theme.SecondBackgroundColor}`}}>
            <Box sx={{display: "flex", flexDirection: "column", width: "30vw", minWidth: "300px", textAlign: "left", justifyContent: "center"}}>
                <Typography sx={{fontSize: 30, color: theme.BoldTextColor, fontWeight: "bold"}}>Let's discuss your Project</Typography>
                <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", marginTop: "20px"}}>
                    <Info
                        name={"Address:"}
                        value={"Mont-Saxonnex, France"}
                        icon={"address"}
                    />
                    <Info
                        name={"My Email:"}
                        value={"nathandonatt@gmail.com"}
                        icon={"email"}
                    />
                    <Info
                        name={"Call me:"}
                        value={"07 77 75 52 92"}
                        icon={"phone"}
                    />
                </Box>
                <Box sx={{display: "flex", flexDirection: "row", justifyContent: "left", marginTop: "20px"}}>
                    <a href="https://www.instagram.com/nathandonatt/">
                        <IoLogoInstagram size={20} color={theme.MainColor} />
                    </a>
                    <a href="https://www.linkedin.com/in/nathan-donat-filliod/">
                        <IoLogoLinkedin style={{marginLeft: "20px"}} size={20} color={theme.MainColor} />
                    </a>
                    <a href="https://github.com/DonatNathan/">
                        <IoLogoGithub style={{marginLeft: "20px"}} size={20} color={theme.MainColor} />
                    </a>
                </Box>
            </Box>
            <Box sx={{display: "flex", flexDirection: "column", width: "30vw", minWidth: "300px", textAlign: "left", justifyContent: "center"}}>
                <Typography sx={{fontSize: 15, color: theme.SubTextColor, marginBottom: "20px"}}>Describe your project as best you can and I will send you a quote for its completion.</Typography>
                <FormControl>
                    <TextField required id="name" label="Name" variant="standard" />
                    <TextField required id="email" label="Email" variant="standard" />
                    <TextField id="location" label="Location" variant="standard" />
                    <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                        <TextField required id="budget" label="Budget" variant="standard" />
                        <TextField required id="subject" label="Subject" variant="standard" />
                    </Box>
                    <TextField required multiline id="message" label="Message" variant="standard" />
                    <Button sx={{":hover": {backgroundColor: theme.ClassicTextColor}, width: "fit-content", backgroundColor: theme.MainColor, color: theme.BackgroundColor, textTransform: "none", fontSize: 15, marginTop: "50px"}}>Submit <IoSendOutline style={{marginLeft: "10px"}} size={20} /></Button>
                </FormControl>
            </Box>
        </Box>
    );
};

export default Contact;