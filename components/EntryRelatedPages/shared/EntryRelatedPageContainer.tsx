import React, { ReactNode } from "react";
import styles from "@/styles/Entry.module.css";
import EntryPageHeader from "../../EntryPageHeader";
import EntryPageFooter from "../../EntryPageFooter";

interface EntryRelatedPageContainerProps {
  children: ReactNode;
}

export default function EntryRelatedPageContainer({
  children,
}: EntryRelatedPageContainerProps) {
  return (
    <main className={`${styles.main}`}>
      <EntryPageHeader />
      <div className={styles.content} data-testid="content">
        {children}
      </div>
      <EntryPageFooter />
    </main>
  );
}
