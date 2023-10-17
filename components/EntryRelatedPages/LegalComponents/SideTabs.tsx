import React from "react";
import Link from "next/link";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import styles from "./SideTabs.module.css";

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
  handleCickButton: (arg: number) => void;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SideTabs({
  btnSelected,
  handleCickButton,
}: SideTabsProps) {
  return (
    <Stack sx={{ padding: "0 16px" }}>
      {tabList.map((tab, index) => (
        <Link href={urls[index]} key={tab}>
          <Button
            className={btnSelected === index ? styles.selected : ""}
            fullWidth
            onClick={() => handleCickButton(index)}
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
            }}
          >
            {tab}
          </Button>
        </Link>
      ))}
    </Stack>
  );
}
