import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const BookingDetail = () => {
  return (
    <Box>
      <Typography>step 1 of 3</Typography>
      <Typography variant="h3" fontWeight={700}>
        Booking Details
      </Typography>
      <Box mt={2}>
            <Box
              sx={{
                background: "#7c8b4d",
                py: 2,
                borderTopLeftRadius: "12px",
                borderTopRightRadius: "12px",
              }}
            >
              <Typography
                variant="h3"
                sx={{ color: "white", pl: 2, fontWeight: 700 }}
              >
                Participant
              </Typography>
            </Box>
            <Box
              sx={{
                p: 2,
                border: "1px solid #7c8b4d ",
                borderEndEndRadius: "12px",
                borderEndStartRadius: "12px",
              }}
              
            >
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                size="small"
                fullWidth
              />
              <TextField
                id="outlined-basic"
                label="Middle Name"
                variant="outlined"
                size="small"
                fullWidth
                sx={{my:3}}
              />
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Box>
      </Box>
    </Box>
  );
};

export default BookingDetail;
