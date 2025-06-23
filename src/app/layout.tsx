import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Hafidz Al Afaf | Frontend Developer",
  description:
    "A frontend developer with 4+ years of experience building responsive, modern, and user-friendly web interfaces. Specialized in React, Next.js, and Web3/blockchain projects.",
  keywords:
    "Frontend Developer, Web3 Developer, React Developer, Next.js, Tailwind CSS, Blockchain, DApp, NFT, Staking, Liquidity, UI Engineer, JavaScript Developer",
  authors: [{ name: "Hafid Al Afaf", url: "https://hafidzalafaf.vercel.app" }],
  creator: "Hafid Al Afaf",
  openGraph: {
    title: "Hafid Al Afaf | Frontend Web3 Developer",
    description:
      "Frontend engineer specializing in modern UI and Web3 development. Experienced in building DApps, NFT platforms, launchpads, and blockchain explorers.",
    url: "https://hafidzalafaf.vercel.app",
    siteName: "Hafid Al Afaf Portfolio",
    images: [
      {
        url: "https://hafidzalafaf.vercel.app/favicon.png",
        width: 1200,
        height: 630,
        alt: "Hafid Al Afaf Portfolio Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hafid Al Afaf | Frontend Web3 Developer",
    description:
      "Building responsive, animated UIs and scalable Web3 apps using React, Next.js, and blockchain tech.",
    images: ["https://hafidzalafaf.vercel.app/favicon.png"],
    creator: "@hafidz00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
