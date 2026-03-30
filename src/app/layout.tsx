import type { Metadata } from "next";
import { Archivo, Space_Grotesk, Playfair_Display } from "next/font/google";
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

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
  style: ["normal", "italic"],
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
    <html lang="en" className={`${archivo.variable} ${spaceGrotesk.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}})()`,
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
