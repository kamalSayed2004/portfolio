import type { Metadata } from "next";
import "./global.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { ThemeProvider } from "../contexts/toggleTheme";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-black dark:text-white">
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
