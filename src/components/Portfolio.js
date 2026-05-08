import { Box, Button, Typography } from "@mui/material";
import { ThemeContext } from "../utils/themes/ThemeContext";
import { useContext } from "react";
import { IoArrowForward, IoChevronDown, IoChevronUp } from "react-icons/io5";
import styled from 'styled-components';

const ProjectDisplay = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: calc(100vh - 120px);
  padding: 80px 40px;
  gap: 60px;
  position: relative;
  transition: all 0.4s ease;
  
  @media (max-width: 960px) {
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }
`;

const DownArrow = styled.a`
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.accentColor};
  animation: bounce 2s infinite;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  @keyframes bounce {
    0%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    50% {
      transform: translateX(-50%) translateY(10px);
    }
  }
  
  &:hover {
    transform: translateX(-50%) scale(1.2) rotate(5deg);
    opacity: 0.8;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
  }
`;

const UpArrow = styled.a`
  position: absolute;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.accentColor};
  animation: bounce 2s infinite;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateX(-50%) scale(1.2) rotate(-5deg);
    opacity: 0.8;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
  }
`;

const ProjectImage = styled.img`
  flex: 1;
  max-width: 500px;
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.15);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 32px 80px rgba(0, 0, 0, 0.22);
  }
`;

const ProjectContent = styled.div`
  flex: 1;
  text-align: left;
  
  @media (max-width: 960px) {
    text-align: center;
  }
`;

const ProjectCard = ({title, category, description, image, link, theme, isFeatured, nextProjectId, prevProjectId}) => {
    return (
        <ProjectDisplay>
            <Box sx={{flex: 1}}>
                <ProjectImage src={image} alt={title} />
            </Box>
            <ProjectContent style={{color: theme.ClassicTextColor}}>
                <Typography sx={{fontSize: 14, fontWeight: "bold", color: theme.MainColor, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px"}}>{category}</Typography>
                <Typography sx={{fontSize: 40, fontWeight: "bold", color: theme.BoldTextColor, marginBottom: "20px", lineHeight: 1.1}}>{title}</Typography>
                <Typography sx={{fontSize: 16, color: theme.ClassicTextColor, lineHeight: 1.8, marginBottom: "32px", maxWidth: "500px"}}>{description}</Typography>
                <Button href={link} sx={{backgroundColor: theme.MainColor, color: theme.BackgroundColor, textTransform: "uppercase", fontSize: 14, padding: "14px 32px", fontWeight: "bold", letterSpacing: "1px", transition: "background-color 0.3s ease, transform 0.3s ease", '&:hover': {backgroundColor: theme.SecondBackgroundColor, color: theme.BoldTextColor, transform: 'translateY(-2px)'}}}>
                    View Project <IoArrowForward style={{marginLeft: "10px"}} size={20} />
                </Button>
            </ProjectContent>
            {nextProjectId && (
                <DownArrow href={nextProjectId} accentColor={theme.MainColor}>
                    <IoChevronDown size={32} color={theme.MainColor} />
                </DownArrow>
            )}
            {prevProjectId && (
                <UpArrow href={prevProjectId} accentColor={theme.MainColor}>
                    <IoChevronUp size={32} color={theme.MainColor} />
                </UpArrow>
            )}
        </ProjectDisplay>
    );
};

const Projects = () => {
    const {theme} = useContext(ThemeContext);

    const foundryProjects = [
        {
            title: "Foundry Lands Management Platform",
            category: "Foundry Project",
            description: "F-LANDER is a modern platform that helps individuals and organizations manage plots of land and oversee the projects built on them from a single workspace. Designed to simplify land operations, F-LANDER centralizes project tracking, planning, and data management to improve visibility and decision-making.",
            image: "/images/flander.png",
            link: "https://www.linkedin.com/feed/update/urn:li:activity:7447191599576477697/"
        }
    ];

    const otherProjects = [
        {
            title: "Arya Assistant",
            category: "AI Software",
            description: "Arya is an advanced AI assistant inspired by Person of Interest, designed to listen, speak, observe, reason, and execute tasks autonomously. It combines conversational AI, vision, memory, and automation into a single cognitive operating system. The goal is to create an intelligent digital operator that interacts naturally with both humans and machines.",
            image: "/images/arya.png",
            link: "https://github.com/DonatNathan/arya"
        },
        {
            title: "Image Compressor",
            category: "Algorithmic Tool",
            description: "This project implements the K-means clustering algorithm in Haskell to reduce the number of colors in an image. By grouping similar colors into clusters, the program generates a simplified version of the image with a limited color palette while preserving its overall appearance.",
            image: "/images/image-compressor.jpg",
            link: "https://github.com/DonatNathan/image-compressor"
        }
    ];

    return (
        <Box id="projects" sx={{backgroundColor: theme.BackgroundColor}}>
            <Box sx={{paddingTop: "120px", paddingBottom: "40px", textAlign: "center"}}>
                <Typography sx={{fontSize: 40, fontWeight: "bold", color: theme.BoldTextColor, marginBottom: "12px", textTransform: "uppercase", fontFamily: "'Magda Clean Mono', monospace"}}>Projects</Typography>
                <Typography sx={{fontSize: 15, color: theme.ClassicTextColor, maxWidth: "720px", marginX: "auto"}}>I design and build projects on Palantir Foundry
, ranging from data-driven tools to workflow automation systems. Alongside that, I regularly create personal projects purely out of curiosity and enjoyment, exploring everything from simulations and procedural generation to low-level systems and interactive applications.</Typography>
            </Box>

            <Box sx={{display: "flex", flexDirection: "column"}}>
                <Box sx={{backgroundColor: theme.BackgroundColor}}>
                    {foundryProjects.map((project, index) => {
                        let nextId = null;
                        let prevId = null;
                        if (index < foundryProjects.length - 1) {
                            nextId = `#foundry-project-${index + 1}`;
                            prevId = index > 0 ? `#foundry-project-${index - 1}` : null;
                        } else if (otherProjects.length > 0) {
                            nextId = "#other-project-0";
                            prevId = index > 0 ? `#foundry-project-${index - 1}` : null;
                        }
                        return (
                            <Box id={`foundry-project-${index}`} key={index}>
                                <ProjectCard 
                                    title={project.title} 
                                    category={project.category} 
                                    description={project.description} 
                                    image={project.image}
                                    link={project.link} 
                                    theme={theme} 
                                    isFeatured={true}
                                    nextProjectId={nextId}
                                    prevProjectId={prevId}
                                />
                            </Box>
                        );
                    })}
                </Box>

                <Box sx={{backgroundColor: theme.BackgroundColor}}>
                    {otherProjects.map((project, index) => {
                        let nextId = null;
                        let prevId = null;
                        if (index < otherProjects.length - 1) {
                            nextId = `#other-project-${index + 1}`;
                            prevId = index > 0 ? `#other-project-${index - 1}` : `#foundry-project-${foundryProjects.length - 1}`;
                        } else {
                            prevId = index > 0 ? `#other-project-${index - 1}` : `#foundry-project-${foundryProjects.length - 1}`;
                        }
                        return (
                            <Box id={`other-project-${index}`} key={index}>
                                <ProjectCard 
                                    title={project.title} 
                                    category={project.category} 
                                    description={project.description} 
                                    image={project.image}
                                    link={project.link} 
                                    theme={theme} 
                                    isFeatured={false}
                                    nextProjectId={nextId}
                                    prevProjectId={prevId}
                                />
                            </Box>
                        );
                    })}
                </Box>
            </Box>
        </Box>
    );
};

export default Projects;