import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./index.module.scss"
import clsx from "clsx";
import Navbar from "@/components/navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={clsx(styles.htmlTag)} lang="en">
      <body className={inter.className}>
       <Navbar /> 
        {children}
        </body>
    </html>
  );
}
