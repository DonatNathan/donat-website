import { useContext, useState, useEffect, useRef, useLayoutEffect } from "react";
import { ThemeContext } from "../utils/themes/ThemeContext";
import { Box, Typography } from "@mui/material";
import styled from 'styled-components';

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

const TriangleWrapper = styled.div`
  animation: blink 1s infinite;
  transform: translateZ(0);

  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 25px solid ${props => props.color};
`;

const Introduction = () => {
    const {theme} = useContext(ThemeContext);
    const [currentSentence, setCurrentSentence] = useState(0);
    const textRef = useRef(null);
    const [lineWidth, setLineWidth] = useState(0);

    useLayoutEffect(() => {
        if (textRef.current) {
            setLineWidth(textRef.current.offsetWidth);
        }
    }, [currentSentence]);

    useEffect(() => {
        console.log("Length of sentences: ", sentences.length);
        const interval = setInterval(() => {
            setCurrentSentence((prev) => (prev + 1) % sentences.length);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <Box id="home" sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: theme.BackgroundColor, paddingTop: "120px", minHeight: "calc(100vh - 120px)"}}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography
                    ref={textRef}
                    sx={{
                        fontSize: 40,
                        color: theme.BoldTextColor,
                        fontWeight: "bold",
                        fontFamily: "'Magda Clean Mono', monospace",
                        display: "inline-block"
                    }}
                >
                    {sentences[currentSentence]}
                </Typography>

                <Box
                    sx={{
                        height: "2px",
                        backgroundColor: theme.BoldTextColor,
                        width: lineWidth,
                        transition: "width 0.5s ease-in-out",
                        marginBottom: "10px",
                    }}
                />
            </Box>
            <TriangleWrapper>
                <Triangle color={theme.MainColor} />
            </TriangleWrapper>
        </Box>
    );
};

export default Introduction;