import { Box, Typography, Button } from "@mui/material"
import { ThemeContext } from "../utils/themes/ThemeContext";
import { useContext } from "react";
import { IoLocationOutline, IoMailOutline, IoCallOutline, IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import styled from 'styled-components';

const ContactCard = styled.a`
  display: flex;
  align-items: center;
  padding: 20px;
  margin: 15px 0;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
  
  &:hover {
    transform: translateX(8px);
    border-left-color: ${props => props.accentColor};
  }
`;

const SocialIconWrapper = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.bgColor};
  transition: all 0.3s ease;
  text-decoration: none;
  margin-right: 15px;
  
  &:hover {
    transform: scale(1.15) rotate(5deg);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  &:last-child {
    margin-right: 0;
  }
`;

const Contact = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <Box id="contact" sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: theme.BackgroundColor, paddingTop: "80px", paddingBottom: "80px", minHeight: "calc(100vh - 120px)"}}>
            <Typography sx={{fontSize: 40, fontWeight: "bold", color: theme.BoldTextColor, marginBottom: "50px", textTransform: "uppercase", fontFamily: "'Magda Clean Mono', monospace"}}>Let's Connect</Typography>
            
            <Box sx={{maxWidth: "600px", width: "100%", marginBottom: "50px"}}>
                <ContactCard accentColor={theme.MainColor} style={{backgroundColor: theme.SecondBackgroundColor}}>
                    <Box sx={{padding: "12px", backgroundColor: theme.BackgroundColor, borderRadius: "6px", marginRight: "15px"}}>
                        <IoLocationOutline size={24} color={theme.MainColor} />
                    </Box>
                    <Box>
                        <Typography sx={{fontSize: 12, color: theme.SubTextColor}}>Location</Typography>
                        <Typography sx={{fontSize: 16, color: theme.BoldTextColor, fontWeight: "bold"}}>Mont-Saxonnex, France</Typography>
                    </Box>
                </ContactCard>

                <ContactCard accentColor={theme.MainColor} href="mailto:nathandonatt@gmail.com" style={{backgroundColor: theme.SecondBackgroundColor}}>
                    <Box sx={{padding: "12px", backgroundColor: theme.BackgroundColor, borderRadius: "6px", marginRight: "15px"}}>
                        <IoMailOutline size={24} color={theme.MainColor} />
                    </Box>
                    <Box>
                        <Typography sx={{fontSize: 12, color: theme.SubTextColor}}>Email</Typography>
                        <Typography sx={{fontSize: 16, color: theme.BoldTextColor, fontWeight: "bold"}}>nathandonatt@gmail.com</Typography>
                    </Box>
                </ContactCard>

                <ContactCard accentColor={theme.MainColor} href="tel:+33777755292" style={{backgroundColor: theme.SecondBackgroundColor}}>
                    <Box sx={{padding: "12px", backgroundColor: theme.BackgroundColor, borderRadius: "6px", marginRight: "15px"}}>
                        <IoCallOutline size={24} color={theme.MainColor} />
                    </Box>
                    <Box>
                        <Typography sx={{fontSize: 12, color: theme.SubTextColor}}>Phone</Typography>
                        <Typography sx={{fontSize: 16, color: theme.BoldTextColor, fontWeight: "bold"}}>+33 7 77 75 52 92</Typography>
                    </Box>
                </ContactCard>
            </Box>

            <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "40px"}}>
                <SocialIconWrapper bgColor={theme.SecondBackgroundColor} href="https://www.instagram.com/nathandonatt/" target="_blank" rel="noopener noreferrer">
                    <IoLogoInstagram size={20} color={theme.MainColor} />
                </SocialIconWrapper>
                <SocialIconWrapper bgColor={theme.SecondBackgroundColor} href="https://www.linkedin.com/in/nathan-donat-filliod/" target="_blank" rel="noopener noreferrer">
                    <IoLogoLinkedin size={20} color={theme.MainColor} />
                </SocialIconWrapper>
                <SocialIconWrapper bgColor={theme.SecondBackgroundColor} href="https://github.com/DonatNathan/" target="_blank" rel="noopener noreferrer">
                    <IoLogoGithub size={20} color={theme.MainColor} />
                </SocialIconWrapper>
            </Box>

            <Button href="#home" sx={{color: theme.ClassicTextColor, textTransform: "none", fontSize: 14, "&:hover": {color: theme.BoldTextColor}}}>Back to Top</Button>
        </Box>
    );
};

export default Contact;