import React from "react";
import Image from "next/image";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function AffiliateCardContainer({ title, description, imgUrl }) {
  return (
    <Box>
      <Box
        sx={{
          borderRadius: "10px",
          width: "335px",
          height: "102px",
          boxShadow:
            "rgba(60, 64, 67, 0.32) 0px 1px 2px, rgba(60, 64, 67, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.1) 0px 1px 8px;",
          margin: "0 0 16px 0",
        }}
      >
        {imgUrl && (
          <Image
            src={imgUrl}
            alt={title}
            // fill={true}
            width={335}
            height={102}
            style={{
              borderRadius: "10px",
              overflow: "clip",
            }}
          />
        )}
      </Box>
      <Typography
        sx={{ fontSize: "20px", fontWeight: "bold", margin: "0 0 8px 0" }}
      >
        {title}
      </Typography>
      <Typography>{description}</Typography>
    </Box>
  );
}
