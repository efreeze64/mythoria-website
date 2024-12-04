import { Metadata } from "next";
import "@/assets/styling/global-style.css";

import Navbar from "@/assets/components/navbar";
import Footer from "@/assets/components/footer";

export const metadata: Metadata = {
  title: "Mythoria",
  description: "Mythoria's official website",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </head>
      <body>{children}</body>
    </html>
  );
}
