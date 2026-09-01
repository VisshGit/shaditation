import type { Metadata } from "next";
import { Cinzel, Poppins, Great_Vibes } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme/ThemeProvider";
import BackgroundMusic from "@/components/ui/BackgroundMusic";
import ScrollToTop from "@/components/ui/ScrollToTop";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-script",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Wedding Invitation",
  description: "A Premium Digital Wedding Invitation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${poppins.variable} ${greatVibes.variable}`}
    >
      <body className="min-h-screen w-full overflow-x-hidden overflow-y-auto">
        <ThemeProvider>
          <ScrollToTop />
          {children}
          <BackgroundMusic />
        </ThemeProvider>
      </body>
    </html>
  );
}
