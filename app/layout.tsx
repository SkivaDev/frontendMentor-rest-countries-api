import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import ThemeProvider from "@/components/ThemeProvider";
import Providers from "./Providers";

export const metadata: Metadata = {
  title: "Frontend Mentor | Rest Countries API",
  description: "Rest Countries API with color theme switcher",
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
