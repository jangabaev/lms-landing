import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar/navbar";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LMSNET",
  icons: {
    icon: "/logo.svg", // "public" papkasidagi logo faylingiz
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="" />
      </head>
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
