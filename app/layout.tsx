import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "i9n",
  description: "Component ideation playground",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "i9n",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Tailwind CDN config - must be before CDN script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.tailwind = {
                config: {
                  darkMode: 'class',
                  theme: {
                    extend: {
                      colors: {
                        border: 'var(--border)',
                        'border-subtle': 'var(--border-subtle)',
                        background: 'var(--background)',
                        foreground: 'var(--foreground)',
                        muted: 'var(--muted)',
                        'muted-foreground': 'var(--muted-foreground)',
                        accent: 'var(--accent)',
                        'accent-hover': 'var(--accent-hover)',
                        'accent-subtle': 'var(--accent-subtle)',
                        surface: 'var(--surface)',
                        'surface-raised': 'var(--surface-raised)',
                        error: 'var(--error)',
                        success: 'var(--success)',
                      }
                    }
                  }
                }
              }
            `,
          }}
        />
        {/* Tailwind Play CDN for dynamic class support in the playground */}
        <script src="https://cdn.tailwindcss.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
