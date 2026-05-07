import { Box, Button, Typography } from "@mui/material";
import { ThemeContext } from "../utils/themes/ThemeContext";
import { useContext, useState } from "react";
import styled from 'styled-components';
import { IoServer, IoGlobe, IoPhonePortrait, IoCode } from 'react-icons/io5';

const InteractiveCard = styled.div`
  padding: 30px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${props => props.accentColor};
    opacity: 0;
    transition: left 0.4s ease;
    z-index: -1;
  }
  
  &:hover::before {
    left: 0;
    opacity: 0.1;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
`;

const ServiceCard = ({name, description, isExpanded, onClick, theme, icon}) => {
    return (
        <InteractiveCard
            onClick={onClick}
            accentColor={theme.MainColor}
            style={{
                backgroundColor: theme.BackgroundColor,
                border: `2px solid ${theme.SecondBackgroundColor}`,
                minHeight: isExpanded ? "200px" : "100px",
            }}
        >
            <Typography sx={{fontSize: 18, fontWeight: "bold", color: theme.BoldTextColor, marginBottom: "10px"}}>
                {name}
            </Typography>
            {isExpanded && (
                <>
                    <Typography sx={{fontSize: 14, color: theme.ClassicTextColor, marginTop: "15px", marginBottom: "15px"}}>
                        {description}
                    </Typography>
                    <Box sx={{display: "flex", justifyContent: "center", marginTop: "15px"}}>
                        {icon}
                    </Box>
                </>
            )}
        </InteractiveCard>
    );
};

const Services = () => {

    const {theme} = useContext(ThemeContext);
    const [expandedIndex, setExpandedIndex] = useState(null);

    const foundryService = {
        name: "PALANTIR FOUNDRY",
        description: "I specialize in building advanced data platforms using Palantir Foundry. My focus is on creating tools and systems that optimize decision-making for companies, enabling better insights and faster business intelligence through powerful data integration and analysis."
    };

    const otherServices = [
        {
            name: "Web Applications",
            description: "Modern, responsive websites and web apps built with latest technologies and best practices."
        },
        {
            name: "Mobile Apps",
            description: "Native and cross-platform mobile applications for iOS and Android with seamless UX."
        },
        {
            name: "Software Solutions",
            description: "Scalable software solutions tailored to your business needs and goals."
        }
    ];

    return (
        <Box id="services" sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", backgroundColor: theme.BackgroundColor, paddingTop: "80px", paddingBottom: "80px", minHeight: "calc(100vh - 120px)"}}>
            <Typography sx={{fontSize: 40, fontWeight: "bold", color: theme.BoldTextColor, marginBottom: "50px", textTransform: "uppercase", fontFamily: "'Magda Clean Mono', monospace"}}>What I Build</Typography>
            
            <Box sx={{width: "100%", maxWidth: "1000px", marginBottom: "40px"}}>
                <InteractiveCard
                    onClick={() => {}}
                    accentColor={theme.MainColor}
                    style={{
                        backgroundColor: theme.BackgroundColor,
                        border: `2px solid ${theme.MainColor}`,
                        minHeight: "200px",
                    }}
                >
                    <Typography sx={{fontSize: 20, fontWeight: "bold", color: theme.BoldTextColor, marginBottom: "15px"}}>
                        {foundryService.name}
                    </Typography>
                    <Typography sx={{fontSize: 15, color: theme.ClassicTextColor, marginBottom: "15px"}}>
                        {foundryService.description}
                    </Typography>
                    <Box sx={{display: "flex", justifyContent: "center"}}>
                        <IoServer size={40} color={theme.MainColor} />
                    </Box>
                </InteractiveCard>
            </Box>

            <Box sx={{display: "grid", gridTemplateColumns: {xs: "1fr", md: "1fr 1fr 1fr"}, gap: "20px", maxWidth: "1000px", width: "100%"}}>
                {otherServices.map((service, index) => (
                    <ServiceCard
                        key={index}
                        name={service.name}
                        description={service.description}
                        isExpanded={expandedIndex === index}
                        onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                        theme={theme}
                        icon={
                            index === 0 ? <IoGlobe size={32} color={theme.MainColor} /> :
                            index === 1 ? <IoPhonePortrait size={32} color={theme.MainColor} /> :
                            <IoCode size={32} color={theme.MainColor} />
                        }
                    />
                ))}
            </Box>
            <Button href="#contact" style={{width: "fit-content", backgroundColor: theme.MainColor, color: theme.BackgroundColor, textTransform: "uppercase", fontSize: 14, marginTop: "50px", padding: "12px 32px", fontWeight: "bold", letterSpacing: "1px"}}>Get In Touch</Button>
        </Box>
    );
};

export default Services;