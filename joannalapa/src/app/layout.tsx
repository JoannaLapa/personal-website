import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joanna Łapa - Frontend Developer",
  description: "Joanna Łapa is a frontend developer based in Poland.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-900 text-slate-100">
      <body
        className={`${urbanist.className}`}
      >
        {children}
      </body>
    </html>
  );
}
