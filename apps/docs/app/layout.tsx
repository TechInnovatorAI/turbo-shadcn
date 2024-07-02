import "@repo/ui/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { withI18n } from "~/lib/i18n/with-i18n";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Roast",
  description: "The website for dating",
};

function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

export default withI18n(RootLayout);