import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/navbar/page";
import { AuthProvider } from "./context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home | SDEV - Technical Blogs & News",
  description:
    "Stay up-to-date with technical blogs, tutorials, and the latest tech news from SDEV.",
  keywords: ["SDEV", "tech news", "coding tutorials"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          className="text-white bg-white"
          rel="icon"
          href="/logo-white.svg"
        />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
