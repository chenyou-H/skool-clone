import React from "react";
import styles from "@/styles/Entry.module.css";

export default function EntryRelatedPageTitle({ children, variant }) {
  let additionalStyles = {};
  if (variant === "subtitle") {
    additionalStyles = {
      "font-size": "35px",
    };
  }
  return (
    <div className={styles.title} style={additionalStyles}>
      {children}
    </div>
  );
}
