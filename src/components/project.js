import { getProjectData } from "@/app/fetchData";
import * as React from "react";
import { Box, Typography } from "@mui/material"

export default function Project ({ project }) {
    return (
        <Box sx={{ mt: 2 }}>
            <Typography variant="h3" component="h3">
                {project.name}
            </Typography>
        </Box>
    );
}