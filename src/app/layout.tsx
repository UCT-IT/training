import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/common/navbar/Navbar";
import Footer from "./components/common/Footer/Footer";
import { strings } from "./assets/locales/locales";

const inter = Inter({ subsets: ["latin"] });

const localeText = strings.metadata.layout;

export const metadata: Metadata = {
  title: localeText.title,
  description: localeText.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
