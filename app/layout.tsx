import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ando — Editor de Video & Estudiante de Informática",
    template: "%s · ando",
  },
  description:
    "José Rincón (ando). Editor de video con 2 años de experiencia en YouTube y redes sociales. Premiere Pro, After Effects y Photoshop. Ritmo, retención y estructura técnica.",
  keywords: [
    "editor de video",
    "YouTube",
    "Shorts",
    "Reels",
    "motion graphics",
    "Premiere Pro",
    "After Effects",
    "Photoshop",
    "estudiante de informática",
    "tecnología",
    "finanzas",
    "portafolio",
  ],
  authors: [{ name: "José Rincón" }],
  creator: "José Rincón",
  openGraph: {
    type: "website",
    locale: "es_ES",
    title: "ando — Editor de Video & Estudiante de Informática",
    description:
      "Editor de video enfocado en retención, ritmo y estructura. YouTube long-form, Shorts/Reels y motion graphics.",
    siteName: "ando",
  },
  twitter: {
    card: "summary_large_image",
    title: "ando — Editor de Video & Estudiante de Informática",
    description:
      "Editor de video enfocado en retención, ritmo y estructura. YouTube long-form, Shorts/Reels y motion graphics.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink-950 font-sans text-zinc-200">
        {children}
      </body>
    </html>
  );
}
