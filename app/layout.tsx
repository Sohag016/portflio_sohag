import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sohag016.github.io"),
  title: "Sohag Hossain | Machine Learning Engineer & Data Scientist",
  description:
    "Welcome to Sohag's Portfolio. Data Science and Machine Learning Engineer specializing in Artificial Intelligence, Deep Learning, Computer Vision, and AI Automation.",
  keywords: [
    "Sohag Hossain",
    "Sohag",
    "Machine Learning Engineer",
    "Data Scientist",
    "Artificial Intelligence",
    "Computer Vision",
    "Deep Learning",
    "Portfolio",
  ],
  authors: [{ name: "Sohag Hossain" }],
  icons: {
    icon: "/assets/images/logo.png",
    shortcut: "/assets/images/logo.png",
  },
  openGraph: {
    title: "Sohag Hossain | Machine Learning Engineer & Data Scientist",
    description:
      "Personal portfolio showcasing AI, Machine Learning, Data Engineering, Research Publications, and Software Projects.",
    url: "https://sohag016.github.io",
    siteName: "Sohag Hossain Portfolio",
    images: [
      {
        url: "/assets/images/profile2.jpg",
        width: 1200,
        height: 630,
        alt: "Sohag Hossain Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-900 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
