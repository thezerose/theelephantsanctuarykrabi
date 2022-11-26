import {
  Box,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import FormControlLabel from '@mui/material/FormControlLabel';

export const Pay = () => {
  return (
    <Box>
      <Typography>step 3 of 3</Typography>
      <Typography variant="h3" fontWeight={700}>
        Payment
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
              <RadioGroup name="use-radio-group" defaultValue="PayPal">
                <FormControlLabel
                  value="PayPal"
                  label="Pay with PayPal"
                  control={<Radio sx={{color:'#C29E75 !important'}} />}
                />
                <FormControlLabel
                  value="Cash"
                  label="Pay Cash on the Day"
                  control={<Radio sx={{color:'#C29E75 !important'}}/>}
                />
              </RadioGroup>
            </Box>
      </Box>
    </Box>
  );
};
