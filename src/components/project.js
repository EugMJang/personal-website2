import { getProjectData } from "@/app/fetchData";
import * as React from "react";
import { Box, Button, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { ChevronRight } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

export default function Project ({ project }) {
    return (
        <Box sx={{ mt: 10, display: "flex" }}>
            <Box>
                <Image
                    alt="projectimg"
                    width="250"
                    height="250"
                    src={project.img}
                />
            </Box>
            <Box sx={{ ml: 3, flexGrow: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
                        <Typography variant="h3" component="h3">
                            {project.name}
                        </Typography>
                        <Typography fontStyle="italic" sx={{ml: 3}}>{project.languages}</Typography>
                    </Box>
                    <Typography color="primary.main">{project.date}</Typography>
                </Box>
                <List>
                    {project.desc.map((desc) => {
                        return (
                            <ListItem key={desc}>
                                <ListItemIcon
                                    sx={{
                                        display: {
                                            xs: "none",
                                            md: "block",
                                        },
                                    }}
                                >
                                    <ChevronRight />
                                </ListItemIcon>
                                <ListItemText>{desc}</ListItemText>
                            </ListItem>
                        );
                    })}
                </List>
            </Box>
        </Box>
    );
}