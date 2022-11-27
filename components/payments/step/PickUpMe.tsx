import { Box, MenuItem, TextField, Typography } from "@mui/material";
import React from "react";
const Location = ["Kathu", "Chalong", "Thalang"];

export const PickUpMe = () => {
  return (
    <Box>
      <Typography>step 3 of 4</Typography>
      <Typography variant="h3" fontWeight={700}>
        Pick up
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
            Pick up
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
            fullWidth
            select
            name="Nationality"
            label="Location"
            size="small"
          >
            {Location.map((item) => (
              <MenuItem key={item}>{item}</MenuItem>
            ))}
          </TextField>
        </Box>
      </Box>
    </Box>
  );
};
