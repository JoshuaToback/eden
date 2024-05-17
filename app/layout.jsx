import "./globals.css";
import { Montserrat } from "next/font/google";
import Eden from "./images/Eden_Transparent.png";

import Head from "next/head";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Eden",
  description:
    "The official website of Eden, an audio drama created by Dead of Night Productions",
  icons: {
    icon: "./EdenHand.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href={metadata.icons.icon} type="image/png" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
