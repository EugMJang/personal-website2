import * as React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import { getProjectData } from "@/app/fetchData";
import Project from "@/components/project";

export default function HomePage() {
    let projectData = getProjectData();
    return (
        <>
            <Box
                sx={{
                    backgroundImage: "url('/landing.jpg')",
                    backgroundColor: "primary.main",
                    backgroundSize: "cover",
                    width: "100vw",
                    height: "80vh",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Container maxWidth="xl">
                    <Typography color="#ffffff" sx={{ fontSize: 30 }}>
                        This is
                    </Typography>
                    <Typography component="h1" variant="h1" >
                        Eugene <br /> Jang
                    </Typography>
                </Container>
            </Box>
            <Container maxWidth="lg" sx={{ mt: 2 }}>
                <Typography component="h2" variant="h2" align="center">
                    Who I am
                </Typography>
                <Divider
                    sx={{
                        borderBottomWidth: 3,
                        backgroundColor: "secondary.main",
                    }}
                />
                <Typography paragraph align="center">
                    I'm a recent graduate from University of Illinois
                    Urbana-Champaign with a B.S. in Computer science looking for
                    the next opportunity to build products for the social good.
                </Typography>
            </Container>
            <Container maxWidth="xl">
                {projectData.map((project) => {
                    console.log(project);
                    return <Project project={project} />
                })}
            </Container>
        </>
    );
}
