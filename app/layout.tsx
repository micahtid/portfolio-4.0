import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ModalProvider from "./components/ModalProvider";
import Backdrop from "./components/Backdrop";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./context/ThemeContext";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Micah Tidball - Full-Stack Developer",
  description: "I build user-centric full-stack applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakartaSans.variable} ${playfairDisplay.variable} font-sans antialiased`}
        style={{ fontFamily: 'var(--font-jakarta-sans)' }}
      >
        <ThemeProvider>
          <Backdrop />
          <ThemeToggle />
          <ModalProvider />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
