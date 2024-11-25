import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import ThemeProvider from "@/components/ThemeProvider";
import Providers from "./Providers";

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
      <body>
        <Providers>
          <ThemeProvider /> {/* Este componente aplica el tema */}
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
