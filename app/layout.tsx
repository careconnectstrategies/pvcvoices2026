import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/AuthProvider";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getSiteUrl } from "@/lib/site";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const siteUrl = getSiteUrl();
const siteTitle = "PVC Voices — Low burden doesn't mean low suffering";
const siteDescription =
  "A patient-led advocacy and education platform for people living with premature ventricular contractions (PVCs) — especially low-burden but highly symptomatic and complex multifocal cases.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s — PVC Voices",
    default: siteTitle,
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    siteName: "PVC Voices",
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "PVC Voices — Low burden doesn't mean low suffering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={nunitoSans.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,650;1,9..144,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AuthProvider>
          <Nav />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
