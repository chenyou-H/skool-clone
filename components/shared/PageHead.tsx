import React from "react";
import Head from "next/head";

interface PageHeadProps {
  title: string;
  content: string;
}

/**
 * PageHead component renders the head elements for related pages.
 * @param {string} title - The title of the page.
 * @param {string} content - The meta description content of the page.
 */

export default function PageHead({ title, content }: PageHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={content} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/skool-icon.ico" />
    </Head>
  );
}
