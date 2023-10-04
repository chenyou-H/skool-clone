import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function AffiliateCardContainer({ title, descripton, imgUrl }) {
  return (
    <Box>
      {imgUrl && <img src={imgUrl} alt={title}></img>}
      <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
        {title}
      </Typography>
      <Typography>{descripton}</Typography>
    </Box>
  );
}
