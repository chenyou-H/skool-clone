import React, { ReactNode } from "react";
import styles from "@/styles/Entry.module.css";

interface EntryRelatedPageDescriptionProps {
  children: ReactNode;
}

export default function EntryRelatedPageDescription({
  children,
}: EntryRelatedPageDescriptionProps) {
  return <div className={styles.description}>{children}</div>;
}
