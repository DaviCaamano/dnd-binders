import type { Metadata } from "next";
import "./globals.scss";
import Providers from "../providers/Providers";

export const metadata: Metadata = {
  title: "D&D 5.5E Binder Printing",
  description: "Print D&D 5.5E Binders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>{children}</Providers>
    </html>
  );
}
