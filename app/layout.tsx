import type { Metadata, Viewport } from "next";
import { getTranslation } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "FI EXHAUST | Premium Automotive Exhaust Systems",
  description:
    "Premium performance exhaust systems for high-end automobiles. Engineering excellence meets sonic perfection.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Start cookieyes banner */}
        <script
          id="cookieyes"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/1455d916933c5d1122deb87fa9dc3649/script.js"
        ></script>
        {/* End cookieyes banner */}
      </head>
      <body>{children}</body>
    </html>
  );
}
