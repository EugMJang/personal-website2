import * as React from "react";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import { Box } from "@mui/material";

export const metadata = {
    title: "Eugene Jang",
    description: "This is Eugene Jang",
};


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body style={{ overflowX: "hidden" }}>
                <ThemeRegistry>
                    <Box component="main">{children}</Box>
                </ThemeRegistry>
            </body>
        </html>
    );
}
