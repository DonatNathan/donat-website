import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../utils/themes/ThemeContext";
import { Box, Typography } from "@mui/material";
import styled from 'styled-components';

const BlinkingTriangle = styled.div`
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 25px solid ${props => props.color};
  animation: blink 1s infinite;
  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

const Introduction = () => {
    const {theme} = useContext(ThemeContext);
    const sentences = [
        "HI",
        "I",
        "AM",
        "NATHAN",
        "WHAT",
        "CAN",
        "I",
        "BUILD",
        "FOR",
        "YOU",
        "TODAY",
        "?"
    ];
    const [currentSentence, setCurrentSentence] = useState(0);

    useEffect(() => {
        console.log("Length of sentences: ", sentences.length);
        const interval = setInterval(() => {
            setCurrentSentence((prev) => (prev + 1) % sentences.length);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <Box id="home" sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: theme.BackgroundColor, paddingTop: "120px", minHeight: "calc(100vh - 120px)"}}>
            <Typography sx={{fontSize: 40, color: theme.BoldTextColor, textDecoration: 'underline', textUnderlineOffset: '10px', marginBottom: "10px", fontWeight: "bold", fontFamily: "'Magda Clean Mono', monospace"}}>{sentences[currentSentence]}</Typography>
            <BlinkingTriangle color={theme.MainColor} />
        </Box>
    );
};

export default Introduction;