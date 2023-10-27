import React from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import styles from "./SideTabs.module.css";

interface SingleTabProps {
  url: string;
  tab: string;
  btnSelected: number;
  index: number;
  handleClickButton: (arg: number) => void;
}

export default function SingleTab({
  url,
  tab,
  btnSelected,
  index,
  handleClickButton,
}: SingleTabProps) {
  const buttonStyles = btnSelected === index ? ` ${styles.selected}` : "";

  return (
    <Link href={url}>
      <Button
        className={buttonStyles}
        fullWidth
        onClick={() => handleClickButton(index)}
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
  );
}
