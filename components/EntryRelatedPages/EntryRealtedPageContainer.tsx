import React from "react";
import styles from "@/styles/Entry.module.css";
import EntryPageHeader from "../EntryPageHeader";
import EntryPageFooter from "../EntryPageFooter";

export default function EntryRealtedPageContainer({ children }) {
  return (
    <main className={`${styles.main}`}>
      <EntryPageHeader />
      {children}
      <EntryPageFooter />
    </main>
  );
}
