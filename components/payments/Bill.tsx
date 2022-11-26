import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";

const Bill = () => {
  const price = 2500;
  return (
    <Box
      sx={{
        display: "flex",
        border: "1px solid #C29E75",
        position: "fixed",
        borderRadius: "12px",
      }}
    >
      <Stack sx={{ p: 4 }}>
        <Box sx={{ width: "400px" }}>
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ textAlign: "right", fontWeight: 700 }}>
              THB
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
            <Box>
              <Typography fontWeight={700}>Half Day Guided Tour</Typography>
              <Typography>Date :</Typography>
            </Box>
            <Typography fontWeight={700}>฿ {price}</Typography>
          </Box>
          <Divider />
          <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
            <Box>
              <Typography>Adult</Typography>
              <Typography>฿ {price}</Typography>
            </Box>
            <Typography>1</Typography>
            <Typography>฿ {price}</Typography>
          </Box>
          <Divider />
          <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
            <Box>
              <Typography fontWeight={700}>Subtotal</Typography>
              <Typography variant="h6" fontWeight={700}>
                Includes taxes & fees
              </Typography>
            </Box>
            <Typography>฿ {price}</Typography>
          </Box>
          <Divider />
          <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
            <Typography fontWeight={700}>Total (THB)</Typography>
            <Typography>฿ {price}</Typography>
          </Box>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Button
            sx={{
              background: "#C29E75 !important",
              borderRadius: "50px",
              color: "white !important",
              py: 2,
              fontSize: "18px",
              fontWeight:700
            }}
            fullWidth
            size="medium"
          >
            Pay  ฿{price}
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Bill;
