import { ArrowForward } from "@mui/icons-material";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { Ipackage } from "../../interface/booking";

type Props = {
  bookingData: Ipackage
}

const BoxProgram = ({bookingData}: Props) => {
  return (
    <Box>
      <Grid container columnSpacing={3} rowSpacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box
            sx={{
              border: "0.5px solid #c29e75	",
              minHeight: "250px",
              borderTop: "5px solid #c29e75",
            }}
          >
            <Box>
              <Stack px={4} py={2}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Typography variant="h3" fontWeight={700}>
                    Program Includes
                  </Typography>
                </Box>
                <Divider sx={{ mx: 6, my: 2 }} />
                <Box>
                  {(bookingData.program_include).map((item:any) => (
                    <Grid container key={item.id} >
                      <Grid item sx={{ mr: 1 }}>
                        <ArrowForward
                          sx={{
                            background: " #c29e75",
                            color: "white",
                            fontSize: "18px",
                            borderRadius: "50px",
                          }}
                        />
                      </Grid>
                      <Grid>
                        <Typography>{item.detail}</Typography>
                      </Grid>
                    </Grid>
                  ))}
                </Box>
              </Stack>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box
            sx={{
              border: "0.5px solid #c29e75	",
              minHeight: "250px",
              borderTop: "5px solid #c29e75",
            }}
          >
            <Box>
              <Stack px={4} py={2}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Typography variant="h3" fontWeight={700}>
                    What to Bring
                  </Typography>
                </Box>
                <Divider sx={{ mx: 6, my: 2 }} />
                <Box>
                  {(bookingData.what_bring).map((item:any) => (
                      <Grid container key={item.id} >
                        <Grid item sx={{ mr: 1 }}>
                          <ArrowForward
                            sx={{
                              background: " #c29e75",
                              color: "white",
                              fontSize: "18px",
                              borderRadius: "50px",
                            }}
                          />
                        </Grid>
                        <Grid>
                          <Typography>{item.detail}</Typography>
                        </Grid>
                      </Grid>
                    ))}
                </Box>
              </Stack>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BoxProgram;
