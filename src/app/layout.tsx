import type { Metadata } from "next";

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
      <body>
        <header></header>
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
