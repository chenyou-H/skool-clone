import React from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const tabList = [
  "Skool rules",
  "Privacy policy",
  "Terms and conditions",
  "Cookie policy",
  "Transaction terms",
  "Acceptable use",
];

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SideTabs({ value, handleChange }) {
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="basic tabs example"
      orientation="vertical"
    >
      {tabList.map((tab, index) => (
        <Tab key={tab} label={tab} {...a11yProps(index)} />
      ))}
    </Tabs>
  );
}
