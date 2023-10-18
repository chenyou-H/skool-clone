import React from "react";
import Head from "next/head";

interface PageHeadProps {
  title: string;
  content: string;
  favicon?: string;
}

/**
 * PageHead component renders the head elements for related pages.
 * @param {string} title - The title of the page.
 * @param {string} content - The meta description content of the page.
 * @param {string} favicon - The location of the favicon (optional).
 */
const PageHead: React.FC<PageHeadProps> = ({
  title,
  content,
  favicon = "/skool-icon.ico",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={content} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={favicon} />
    </Head>
  );
};

export default PageHead;
