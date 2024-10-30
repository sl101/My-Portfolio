import type { Metadata } from "next";
import "./styles.css";
import { Footer, Header } from "./components";

export const metadata: Metadata = {
  title: "Portfolio | Web developer | Viacheslav Zhevaha",
  description: "Generated on Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
				<Header/>
				{children}
				<Footer/>
      </body>
    </html>
  );
}
