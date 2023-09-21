import React from "react";

import Box from "@mui/material/Box";

import Levels from "./Levels";
import Experience from "./Experience";
import AvatarWithBadge from "./AvatarWithBadge";
import { flexCenterStyle } from "../StyledComponents";

const levelPoints = {
  1: 0,
  2: 5,
  3: 20,
  4: 65,
  5: 155,
  6: 515,
  7: 2015,
  8: 8015,
  9: 33015,
};

export default function AvatarAndLevels({ user, levelPageLink = "#" }) {
  const curPoints = user.points;
  const curPointsPercentage = parseInt(
    (curPoints / levelPoints[user.level + 1]) * 100
  );

  return (
    <Box
      sx={{
        flexDirection: "column",
        ...flexCenterStyle,
      }}
    >
      <AvatarWithBadge curPointsPercentage={curPointsPercentage} {...user} />
      <Levels levelPageLink={levelPageLink} user={user} />
      <Experience curPointsPercentage={curPointsPercentage} />
    </Box>
  );
}
