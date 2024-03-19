
import "@/styles/globals.css";
import { Inter } from "next/font/google";


import { Providers } from "./GlobalRedux/provider";
import Header from "./_components/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Roc8",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <Providers>
          <Header />
          <div className="max-w-screen-2xl mx-auto flex flex-col items-center ">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
