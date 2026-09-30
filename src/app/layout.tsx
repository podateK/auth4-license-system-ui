import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geist = localFont({
  src: [
    { path: "../../assets/fonts/Geist-Regular.ttf", weight: "400" },
    { path: "../../assets/fonts/Geist-Bold.ttf", weight: "700" },
  ],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Licence System — UI Demo",
    template: "%s | Licence System UI",
  },
  description:
    "Statyczna prezentacja interfejsu systemu licencji pluginów Minecraft.",
  applicationName: "Licence System UI Demo",
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07111f",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${geist.variable} h-full antialiased dark`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
