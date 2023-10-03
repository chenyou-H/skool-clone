import React from "react";
import Head from "next/head";

interface EntryRelatedPageHeadProps {
  title: string;
  content: string;
}

export default function EntryRelatedPageHead({
  title,
  content,
}: EntryRelatedPageHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={content} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/skool-icon.ico" />
    </Head>
  );
}
