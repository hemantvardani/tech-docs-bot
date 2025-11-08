import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Script from "next/script";
import Provider from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI TechDoc - AI-Powered Technical Documentation Chat",
  description: "Transform your technical documentation into an intelligent chatbot. Get instant answers and improve your documentation experience with AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider> 
          <Navbar />
          {children}

          <Script
            id="chatbot-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  const s = document.createElement('script');
                  s.src = "http://localhost:3000/widget.js"; // your chatbot script URL
                  s.onload = () => {
                  window.MyChatWidget.default.init({ apiUrl: 'http://localhost:8000/chat' });
                  };
                  s.async = true;
                  document.body.appendChild(s);
                })();
              `
            }}
          />
        </Provider>
      </body>
    </html>
  );
}
