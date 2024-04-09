import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import { NavBar } from "@/components";
import Providers from "./providers";
import Image from "next/image";
import biblioteca from "../../public/images/biblioteca.jpeg";

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
      <link
        rel="icon"
        href="/favicon.png"
        type="image/<generated>"
        sizes="<generated>"
      />
      <title>UPBuen Viaje</title>
      <body className="flex h-[100dvh] w-screen bg-white">
        <Providers>
          <Image
            src={biblioteca}
            alt="campus"
            className="inset-0 absolute w-full h-full object-cover opacity-40 -z-50"
          />
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
