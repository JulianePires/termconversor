import Head from "next/head";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  title: string;
}

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Temperature conversor made with Next JS, Material UI and Typescript"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      {children}
    </>
  );
};
