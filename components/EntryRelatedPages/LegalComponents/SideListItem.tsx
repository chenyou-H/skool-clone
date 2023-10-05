import React, { useState } from "react";

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

// const StyledListItemButton = styled(ListItemButton)({
//   "&$selected": {
//     backgroundColor: "red",
//   },
//   "&:focus": {
//     backgroundColor: "red",
//   },
//   "&:hover": {
//     backgroundColor: "orange",
//   },
// });

export default function SideListItem() {
  let [focusIndex, setFocusIndex] = useState(0);

  let handleClickButton = (index: number) => {
    setFocusIndex(index);
  };

  return (
    <div>
      {list.map((item, index) => (
        <ListItem key={index} sx={{ padding: "0" }}>
          <ListItemButton
            onClick={() => {
              handleClickButton(index);
            }}
            autoFocus={focusIndex === index}
            sx={{
              borderRadius: "10px",
              padding: "0 16px 0 16px",
              "&:focus": {
                // backgroundColor: "red",
                backgroundColor: "rgb(250, 227, 172)",
              },
            }}
          >
            {/* <StyledListItemButton> */}
            <ListItemText primary={item} />
            {/* </StyledListItemButton> */}
          </ListItemButton>
        </ListItem>
      ))}
    </div>
  );
}
