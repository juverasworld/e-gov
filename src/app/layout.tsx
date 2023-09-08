import "./globals.css";
import type { Metadata } from "next";
import { NavBar } from "@/components/molecules";
import { Footer } from "@/components/templates";

export const metadata: Metadata = {
  title: "Enugu State Ministry of Land and Urban Development",
  description:
    "Empowering Growth, Driving Prosperity for a Thriving Enugu State",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
