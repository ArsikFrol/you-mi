import { Montserrat } from "next/font/google";
import "./globals.css";
import type { Metadata } from 'next'

import { ProviderSession } from "@/components/Providers/ProviderSession";
import { ToastProvider } from "@/components/Providers/ToastProvider";

import ScrollTop from "@/components/ScrollTop";
import { ThemeProvider } from "@/components/Providers/ThemeProvider";

export const metadata: Metadata = {
  title: 'Главная | You-Mi',
}

const montserrat = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={montserrat.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <ToastProvider>
                <ProviderSession>
                    {children}
                </ProviderSession>
            </ToastProvider>
        </ThemeProvider>
        <ScrollTop />
      </body>
    </html>
  );
}
