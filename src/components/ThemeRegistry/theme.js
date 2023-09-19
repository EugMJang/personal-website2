import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#07152eff",
        },
        secondary: {
            main: "#a3c4bcff",
        },
        oxfordBlue: "#07152eff",
        ashGray: "#a3c4bcff",
        apricot: "#fcc8b2ff",
        glaucous: "#7d82b8ff",
        quinacridoneMagenta: "#912f56ff",
    },
    typography: {
        h1: {
            fontSize: "10rem",
            fontFamily: "Red Hat Display",
            color: "#ffffff",
        },
        h2: {
            color: "#07152eff",
            fontFamily: "Red Hat Display",
        },
        h3: {
            color: "#07152eff",
            fontFamily: "Red Hat Display",
            fontSize: "2.4rem",
        },
        body1: {
            fontSize: "1.25rem",
        },
    },
});

export default theme;
