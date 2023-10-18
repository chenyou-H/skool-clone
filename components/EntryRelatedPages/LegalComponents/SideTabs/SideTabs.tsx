import React from "react";
import Stack from "@mui/material/Stack";

import SingleTab from "./SingleTab";

const tabList = [
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

interface SideTabsProps {
  btnSelected: number;
  handleClickButton: (arg: number) => void;
}

export default function SideTabs({
  btnSelected,
  handleClickButton,
}: SideTabsProps) {
  return (
    <Stack sx={{ padding: "0 16px" }}>
      {tabList.map((tab, index) => (
        <SingleTab
          key={tab}
          tab={tab}
          url={urls[index]}
          btnSelected={btnSelected}
          index={index}
          handleClickButton={handleClickButton}
        />
      ))}
    </Stack>
  );
}
