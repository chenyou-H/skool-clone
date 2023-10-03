import React, { ReactNode } from "react";
import styles from "@/styles/Entry.module.css";

interface EntryRelatedPageTitleProps {
  variant?: "subtitle";
  children: ReactNode;
}

export default function EntryRelatedPageTitle({
  children,
  variant,
}: EntryRelatedPageTitleProps) {
  let titleStyles = {};
  if (variant === "subtitle") {
    titleStyles = {
      fontSize: "35px",
    };
  }
  return (
    <div className={styles.title} style={titleStyles}>
      {children}
    </div>
  );
}
