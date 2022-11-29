import { Box, MenuItem, TextField, Typography } from "@mui/material";
import React from "react";
import { AutocompleteElement } from "react-hook-form-mui";
import { countries } from "../../../constants/countries";

const BookingDetail = () => {
  return (
    <Box>
      <Typography>step 1 of 4</Typography>
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
            px: 2,
            py: 3,
            border: "1px solid #7c8b4d ",
            borderEndEndRadius: "12px",
            borderEndStartRadius: "12px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Full Name"
            size="small"
            fullWidth
            required
          />
          <TextField
            id="outlined-basic"
            label="Tel"
            size="small"
            fullWidth
            sx={{ my: 3 }}
            required
          />
          <TextField
            id="outlined-basic"
            label="E-mail"
            size="small"
            fullWidth
            required
          />
          <TextField
            id="outlined-basic"
            label="What App"
            size="small"
            fullWidth
            sx={{ my: 3 }}
          />

          <TextField
            fullWidth
            select
            name="Nationality"
            label="Country"
            size="small"
          >
            {countries.map((c) => (
              <MenuItem key={c.code}>{c.label}</MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-basic"
            label="Special request"
            size="small"
            multiline
            rows={4}
            fullWidth
            sx={{ my: 3 }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default BookingDetail;
