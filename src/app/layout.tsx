import "./globals.css";

import Layout from "@/components/Layout";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ['latin']})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
            {children}
        </Layout>
      </body>
    </html>
  );
}
