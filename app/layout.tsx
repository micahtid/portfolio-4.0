import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import KeyboardNavigation from "@/components/KeyboardNavigation";
import LoadingBar from "@/components/LoadingBar";
import Navigation from "@/components/Navigation";
import { ThemeProvider } from "@/components/ThemeProvider";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Micah Tidball",
  description: "Software Engineer & Student at Raikes School.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${robotoMono.variable} antialiased font-mono`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingBar />
          <KeyboardNavigation />
          <div className="max-w-[800px] mx-auto pb-6 px-4 md:px-0">
            <Navigation />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
