import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Naya Fytali | Software Engineer",
  description:
    "Software Engineer based in Athens, Greece. Building enterprise web applications with Java, React, and modern technologies.",
  openGraph: {
    title: "Naya Fytali | Software Engineer",
    description:
      "Software Engineer based in Athens, Greece. Building enterprise web applications with Java, React, and modern technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
