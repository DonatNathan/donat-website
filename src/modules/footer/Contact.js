import React from "react"
import { Box } from "@mui/material"
import { SocialIcon } from "react-social-icons";

const ContactIconComponent = ({url}) => {
    return (
        <Box sx={{marginLeft: "10%", marginRight: "10%"}}>
            <SocialIcon url={url} />
        </Box>
    )
}

const ContactBlock = () => {
    return (
        <Box sx={{height: "15vh", width: "90%", paddingLeft: "5%", paddingRight: "5%", paddingBottom: "3%", paddingTop: "3%", alignItems: "center", display: "flex", flexDirection: "column", backgroundColor: "rgba(0, 0, 0, 0.7)"}}>
            <h2>Contact</h2>
            <Box sx={{display: "flex", justifyContent: "center"}}>
                <ContactIconComponent url="https://www.linkedin.com/in/nathan-donat-filliod/" />
                <ContactIconComponent url="https://github.com/DonatNathan" />
                <ContactIconComponent url="https://www.instagram.com/nathandonatt/" />
                <ContactIconComponent url="https://www.youtube.com/@donaaathan" />
            </Box>
        </Box>
    )
}

export default ContactBlock;