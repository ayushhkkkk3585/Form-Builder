import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <main className="container mx-auto">
            <div className="flex items-start justify-center min-h-screen">
              <div >
              {children}

              </div>
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
