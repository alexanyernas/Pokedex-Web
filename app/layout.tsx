// Metadata
import type { Metadata } from "next";

// Fonts
import { Montserrat } from "next/font/google";

// Styles
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokemon - Gotta Catch'em All!",
  description: "Portable encyclopedic reference tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}