import { useContext } from "react";
import { ThemeContext } from "../utils/themes/ThemeContext";
import { Box, Button, Typography } from "@mui/material";
import { IoArrowForward } from "react-icons/io5";

const ProjectIdea = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: theme.BackgroundColor,
                px: { xs: 2, md: 0 },
                py: { xs: 6, md: 10 },
                minHeight: "calc(100vh - 120px)",
                overflowX: "hidden"
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "840px",
                    p: { xs: 3, sm: 4, md: 5 },
                    borderRadius: "20px",
                    backgroundColor: theme.SecondBackgroundColor,
                    border: `1px solid ${theme.MainColor}`,
                    boxShadow: `0 24px 60px rgba(0, 0, 0, 0.12)`,
                    transition: "transform 0.4s ease, box-shadow 0.4s ease",
                    "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: `0 32px 80px rgba(0, 0, 0, 0.18)`
                    }
                }}
            >
                <Typography
                    sx={{
                        fontSize: 14,
                        sm: 16,
                        fontWeight: "bold",
                        color: theme.MainColor,
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        mb: 2
                    }}
                >
                    Request accepted
                </Typography>

                <Typography
                    sx={{
                        fontSize: { xs: 26, sm: 34, md: 44 },
                        fontWeight: "bold",
                        color: theme.BoldTextColor,
                        mb: 2,
                        lineHeight: 1.1,
                        px: { xs: 1, sm: 0 }
                    }}
                >
                    I can build whatever you want.
                </Typography>

                <Typography
                    sx={{
                        fontSize: { xs: 14, sm: 16 },
                        color: theme.ClassicTextColor,
                        lineHeight: 1.7,
                        mb: 4,
                        maxWidth: "680px",
                        mx: "auto"
                    }}
                >
                    From Palantir Foundry platforms to websites, mobile apps and custom software,
                    I create the tools that make decisions easier, faster and more reliable.
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: 1.2,
                        mb: 4
                    }}
                >
                    {["Foundry", "Web", "Mobile", "Software"].map((tag) => (
                        <Box
                            key={tag}
                            sx={{
                                px: { xs: 1.5, sm: 2 },
                                py: 1,
                                borderRadius: "999px",
                                backgroundColor: theme.BackgroundColor,
                                color: theme.BoldTextColor,
                                fontSize: 12,
                                fontWeight: "bold",
                                letterSpacing: "1px",
                                textTransform: "uppercase",
                                border: `1px solid ${theme.SecondBackgroundColor}`
                            }}
                        >
                            {tag}
                        </Box>
                    ))}
                </Box>

                <Button
                    href="#contact"
                    sx={{
                        width: "fit-content",
                        maxWidth: "100%",
                        backgroundColor: theme.MainColor,
                        color: theme.BackgroundColor,
                        textTransform: "uppercase",
                        fontSize: 14,
                        px: { xs: 3, sm: 4 },
                        py: 1.5,
                        fontWeight: "bold",
                        letterSpacing: "1px",
                        border: `1px solid ${theme.MainColor}`,
                        transition: "all 0.3s ease",
                        "&:hover": {
                            backgroundColor: theme.BackgroundColor,
                            color: theme.BoldTextColor,
                            transform: "translateY(-2px)",
                            border: `1px solid ${theme.MainColor}`
                        }
                    }}
                >
                    Start the build
                    <IoArrowForward style={{ marginLeft: "10px" }} size={20} />
                </Button>
            </Box>
        </Box>
    );
};

export default ProjectIdea;