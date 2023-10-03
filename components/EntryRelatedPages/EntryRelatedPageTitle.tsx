import React from "react";
import styles from "@/styles/Entry.module.css";

export default function EntryRelatedPageTitle({ children }) {
  return <div className={styles.title}>{children}</div>;
}
