import type { Metadata } from "next";
import { Noto_Sans_Georgian } from "next/font/google";
import "./globals.css";

import { ConvexClientProvider } from "./ConvexClientProvider";
import { Toaster } from "@/components/ui/sonner";

const defaultFont = Noto_Sans_Georgian({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todovex.ai",
  description:
    "TodoVex seamlessly organizes your tasks and predicts what's nextusing AI.",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="className={defaultFont.className} antialiased">
        <main>
          <ConvexClientProvider>{children}</ConvexClientProvider>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
