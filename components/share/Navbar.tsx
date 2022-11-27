import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import NextLink from "next/link";

const Navbar = () => {
  return (
    <>
      <AppBar sx={{ zIndex: (th) => th.zIndex.drawer + 1 }}>
        <Toolbar
          sx={{
            px: 0,
            py: 2,
            background: "#ffffff !important",
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Box sx={{ display: "flex", my: "auto" }}>
                <NextLink href="/">
                  <Typography
                    variant="h3"
                    sx={{ color: "#7c8b4d", fontWeight: 700 }}
                  >
                    The Elephant Sanctuary Krabi
                  </Typography>
                </NextLink>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography color="primary" my="auto">
                  Home
                </Typography>
                <Box sx={{ display: "flex", my: "auto" }}>
                  <NextLink href="/booking/1">
                    <Typography
                      color="primary"
                      mx={2}
                      sx={{
                        ":hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Morning Program
                    </Typography>
                  </NextLink>
                </Box>

                <Box sx={{ display: "flex", my: "auto" }}>
                  <NextLink href="/booking/2">
                    <Typography
                      color="primary"
                      sx={{
                        ":hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Afternoon Program
                    </Typography>
                  </NextLink>
                </Box>

                <Typography color="primary" mx={2} my="auto">
                  Gallery
                </Typography>
                <Typography color="primary" mr={2} my="auto">
                  Contact
                </Typography>
                <NextLink href="/">
                  <Button variant="contained" color="primary" size="large">
                    Book Now
                  </Button>
                </NextLink>
              </Box>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
