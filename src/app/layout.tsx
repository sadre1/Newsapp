import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
const font = DM_Sans({ subsets: ["latin"] });
import NavBar from "@/components/navBar";

export const metadata: Metadata = {
  title: "News2Day-Home",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <div className="mt-16 w-3/4 mx-auto">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
