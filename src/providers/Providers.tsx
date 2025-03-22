"use client";
import { usePathname } from "next/navigation";
import localFont from "next/font/local";
import { PropsWithChildren } from "react";

const geistSans = localFont({
  src: "../app/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../app/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const printingRoutes = ["/spellbook", "/featurelist"];
export default function Providers({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const isPrinting =
    printingRoutes.some((route) => pathname.startsWith(route)) ||
    pathname === "/";

  return (
    <body
      className={`${geistSans.variable} ${geistMono.variable} ${
        isPrinting ? "print-page" : ""
      } antialiased`}
    >
      {children}
    </body>
  );
}
