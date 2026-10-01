import type { Metadata } from "next";

import { Cinzel, Poppins, Great_Vibes } from "next/font/google";

import "./globals.css";

import ThemeProvider from "@/components/theme/ThemeProvider";

import BackgroundMusic from "@/components/ui/BackgroundMusic";

import Footer from "@/components/layout/Footer";

import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";



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

  title: "Vishal & Varsha Wedding Invitation",

  description: "Join us in celebrating our special day!",

  openGraph: {

    title: "Vishal & Varsha Wedding Invitation",

    description: "You're invited to celebrate our wedding ceremony!",

    url: "https://your-domain.vercel.app", // Yahan apni live website ka domain daal dena

    siteName: "Vishal & Varsha Wedding",

    images: [

      {

        url: "/images/logo.png", // Public/images folder mein rakhi hui logo.png ka path

        width: 1200,

        height: 630,

        alt: "Vishal & Varsha Wedding Invitation",

      },

    ],

    locale: "en_IN",

    type: "website",

  },

  twitter: {

    card: "summary_large_image",

    title: "Vishal & Varsha Wedding Invitation",

    description: "You're invited to celebrate our wedding ceremony!",

    images: ["/images/logo.png"],

  },

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

      <body className="min-h-screen w-full">

        <SmoothScrollProvider>

          <ThemeProvider>

            {children}



            <Footer />



            <BackgroundMusic />

          </ThemeProvider>

        </SmoothScrollProvider>

      </body>

    </html>

  );

}
