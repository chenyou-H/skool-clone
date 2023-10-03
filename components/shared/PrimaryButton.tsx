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
      variant="contained"
      fullWidth
      className={styles.btn}
      onClick={onClick}
      href={href}
    >
      {children}
    </Button>
  );
}

export default PrimaryButton;
