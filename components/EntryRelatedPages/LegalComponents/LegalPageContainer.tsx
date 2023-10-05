import React, { ReactNode } from "react";
import styles from "@/styles/Entry.module.css";

interface LegalPageContainerProps {
  children: ReactNode;
}

export default function LegalPageContainer({
  children,
}: LegalPageContainerProps) {
  return (
    <main className={`${styles.main}`}>
      <div className={styles.content} data-testid="content">
        {children}
      </div>
    </main>
  );
}
