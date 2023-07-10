import { AppBar, Toolbar, Typography } from "@mui/material";

const Footer = () => {
    return (
        <AppBar position="static" color="primary" style={{ position: 'fixed', bottom: '0', width: '100%' }}>
            <Toolbar>
                <Typography 
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: { xs: "none", md: "flex" },
                        fontFamily: "monospace",
                        fontWeight: 500,
                        letterSpacing: "1px",
                        color: "inherit",
                        textDecoration: "none",
                    }}
                >
                    {new Date().getFullYear()} Copyright Text
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export { Footer };
