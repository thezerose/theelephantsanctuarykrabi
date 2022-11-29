/* eslint-disable react/jsx-key */
import { Box, Typography } from "@mui/material";
import React from "react";
import Timeline from "@mui/lab/Timeline";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  timelineItemClasses,
  TimelineSeparator,
} from "@mui/lab";
import { Ipackage } from "../../interface/booking";

type Props = {
  bookingData: Ipackage;
};

const Detail = ({ bookingData }: Props) => {
  return (
    <Box>
      <Box>
        <Box sx={{ display: "flex" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mt: 2,
              borderTop: "4px solid #c29e75 ",
              pt: 1,
            }}
          >
            {bookingData.package.name}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", mt: 2 }}>
          <Typography sx={{ color: "#71747a" }}>
            {" "}
            {bookingData.package.description}
          </Typography>
        </Box>
      </Box>
      <Box mt={6}>
        <Typography
          sx={{ fontWeight: 900, fontSize: "24px", textTransform: "uppercase" }}
        >
          itinerary
        </Typography>
        <Box sx={{ my: 2 }}>
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            {bookingData.itinerary.map((item: any) => (
              <TimelineItem key={item.id} sx={{ mb: 1 }}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  <TimelineConnector sx={{ backgroundColor: "#9DAC6E" }} />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography sx={{ fontWeight: 700, mb: 1 }}>
                    {item.time}
                  </Typography>
                  <Typography>{item.detail}</Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      </Box>
    </Box>
  );
};

export default Detail;
