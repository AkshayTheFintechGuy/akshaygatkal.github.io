import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Akshay Gatkal | ERP & Dynamics 365 Consultant",
  description: "ERP functional consultant helping businesses align finance, manufacturing and supply-chain operations with Microsoft Dynamics 365 Business Central.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Akshay Gatkal | ERP & Dynamics 365 Consultant",
    description: "Finance-rooted ERP consulting across Business Central, manufacturing, supply chain and business process transformation.",
    url: "/",
    siteName: "Akshay Gatkal",
    type: "website",
    images: [
      {
        url: `${basePath}/og.png`,
        width: 1200,
        height: 630,
        alt: "Akshay Gatkal — ERP & Dynamics 365 Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshay Gatkal | ERP & Dynamics 365 Consultant",
    description: "Finance-rooted ERP consulting across Business Central, manufacturing and supply chain.",
    images: [`${basePath}/og.png`],
  },
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
