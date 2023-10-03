import React from "react";
import styles from "@/styles/Entry.module.css";

export default function EntryRealtedPageDescription({ children }) {
  return <div className={styles.description}>{children}</div>;
}
