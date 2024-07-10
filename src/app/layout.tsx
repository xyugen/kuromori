import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import coverImage from "@/images/kuromori-cover.png";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kuromori — Discover the Depths of Anime",
  description: "Immerse yourself in the world of anime with our sleek, minimalistic streaming platform featuring a curated selection of top shows.",
  authors: [{ name: "Pagzone", url: "https://github.com/pagzone/" }, { name: "Renzyx", url: "https://renzyx.is-a.dev/" }],
  keywords: [
    "anime streaming",
    "kuromori anime",
    "kuromori",
    "minimalistic anime streaming",
  ],
  openGraph: {
    title: "Kuromori — Discover the Depths of Anime",
    description: "Immerse yourself in the world of anime with our sleek, minimalistic streaming platform featuring a curated selection of top shows.",
    url: "https://kuromori.vercel.app",
    siteName: "Kuromori",
    images: [coverImage.src],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Kuromori — Discover the Depths of Anime",
    description: "Immerse yourself in the world of anime with our sleek, minimalistic streaming platform featuring a curated selection of top shows.",
    card: "summary_large_image",
    creator: "@vercel",
    images: [coverImage.src],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(raleway.className, "antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
