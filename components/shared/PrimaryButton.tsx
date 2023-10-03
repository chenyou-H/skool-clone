import React, { ReactNode } from "react";
import Button from "@mui/material/Button";

//css
import styles from "../login/style.module.css";

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
}

function PrimaryButton({ children, onClick, href }: PrimaryButtonProps) {
  return (
    <Button
      className={styles.btn}
      variant="contained"
      onClick={onClick}
      href={href}
      fullWidth
    >
      {children}
    </Button>
  );
}

export default PrimaryButton;
