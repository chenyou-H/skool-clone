import React from "react";
import Link from "next/link";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

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
  value: number;
  handleChange: () => void;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const orangeBackgroundColor = "rgb(250, 227, 172)";

export default function SideTabs({ value, handleChange }: SideTabsProps) {
  // return (
  //   <Tabs
  //     value={value}
  //     onChange={handleChange}
  //     aria-label="basic tabs example"
  //     orientation="vertical"
  //   >
  //     {tabList.map((tab, index) => (
  //       <Link href={urls[index]} key={tab}>
  //         {/* <Tab
  //           label={tab}
  //           // {...a11yProps(index)}
  //           sx={{
  //             color: "black",
  //             borderRadius: "10px",
  //             padding: "0 16px 0 16px",
  //             "&:focus": {
  //               color: "black",
  //               backgroundColor: "rgb(250, 227, 172)",
  //             },
  //             "&:select": {
  //               color: "black",
  //               backgroundColor: "rgb(250, 227, 172)",
  //             },
  //           }}
  //         ></Tab> */}
  //         <Button
  //           // label={tab}
  //           // {...a11yProps(index)}
  //           sx={{
  //             color: "black",
  //             borderRadius: "10px",
  //             padding: "0 16px 0 16px",
  //             "&:focus": {
  //               color: "black",
  //               backgroundColor: "rgb(250, 227, 172)",
  //             },
  //             "&:select": {
  //               color: "black",
  //               backgroundColor: "rgb(250, 227, 172)",
  //             },
  //           }}
  //         >
  //           {tab}
  //         </Button>
  //       </Link>
  //     ))}
  //   </Tabs>
  // );
  return (
    <Stack sx={{ padding: "0 16px" }}>
      {tabList.map((tab, index) => (
        <Link href={urls[index]} key={tab}>
          <Button
            autoFocus
            fullWidth
            sx={{
              color: "black",
              justifyContent: "flex-start",
              borderRadius: "10px",
              padding: "0 16px 0 16px",
              height: "48px",
              width: "241px",
              // "&:select": {
              //   color: "black",
              //   backgroundColor: orangeBackgroundColor,
              // },
              "&:hover": {
                backgroundColor: "rgb(228, 228, 228)",
              },
              "&:focus": {
                color: "black",
                backgroundColor: orangeBackgroundColor,
              },
            }}
          >
            {tab}
          </Button>
        </Link>
      ))}
    </Stack>
  );
}
