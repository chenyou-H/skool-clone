import React, { useState } from "react";
// import Link from "next/link";
import Link from "@mui/material/Link";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";

const list = [
  "Skool rules",
  "Privacy policy",
  "Terms and conditions",
  "Cookie policy",
  "Transaction terms",
  "Acceptable use",
];

const urls = [
  "/legal?t=rules",
  "/legal?t=privacy",
  "legal?t=terms",
  "legal?t=cookies",
  "legal?t=transaction",
  "legal?t=acceptable-use",
];

const orangeBackgroundColor = "rgb(250, 227, 172)";

export default function SideListItem() {
  let [focusIndex, setFocusIndex] = useState(0);

  let handleClickButton = (index: number) => {
    setFocusIndex(index);
  };

  return (
    <List sx={{ padding: "0 16px" }}>
      {list.map((item, index) => (
        <ListItem key={index} sx={{ padding: "0" }}>
          <Link href={urls[index]} underline="none">
            <ListItemButton
              onClick={() => {
                handleClickButton(index);
              }}
              autoFocus={focusIndex === index}
              sx={{
                color: "black",
                justifyContent: "flex-start",
                borderRadius: "10px",
                padding: "0 16px",
                height: "48px",
                width: "241px",
                "&:hover": {
                  backgroundColor: "rgb(228, 228, 228)",
                },
                "&:focus": {
                  color: "black",
                  backgroundColor: orangeBackgroundColor,
                },
              }}
            >
              <b>{item}</b>
              {/* <ListItemText primary={item} /> */}
            </ListItemButton>
          </Link>
        </ListItem>
      ))}
    </List>
  );
}
