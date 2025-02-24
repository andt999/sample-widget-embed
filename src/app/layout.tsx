/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://ai-cms.alex-defikit.workers.dev/styling.css" />
      <script src="https://ai-cms.alex-defikit.workers.dev/widget.js"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `AIChatWidget.init({
              agentId: 'aee75e85-0027-4a77-813f-040d4ac96af8',
              serverUrl: 'https://aiapi-internal.defikit.net',
              widgetUrl: 'https://ai-cms.alex-defikit.workers.dev',
              position: 'bottom-right'
            });`
          }}
        />
      </body>
    </html>
  );
}
