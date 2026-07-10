import type { Metadata } from "next";
import "@styles/globals.css";

export const metadata: Metadata = {
  title: "Naveed Ahmed | Full-Stack Developer",
  description:
    "Naveed Ahmed - Full-Stack Developer building end-to-end web applications with the MERN stack.",
  metadataBase: new URL("https://naveed-dev-weld.vercel.app"),
  openGraph: {
    title: "Naveed Ahmed | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in MERN stack — React, Node.js, MongoDB & Express.",
    url: "https://naveed-dev-weld.vercel.app",
    siteName: "Naveed Ahmed Portfolio",
    images: [{ url: "/og.image.png", width: 1200, height: 630, alt: "Naveed Ahmed Portfolio" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naveed Ahmed | Full-Stack Developer",
    description: "Full-Stack Developer specializing in MERN stack.",
    images: ["/og.image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('theme'),d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(t===null&&d))document.documentElement.classList.add('dark')})()` }} />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://naveed-dev-weld.vercel.app/" />
        <link
          rel="preload"
          href="/fonts/montserrat-latin-wght-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Naveed Ahmed",
              alternateName: "Naveed Ahmed",
              url: "https://naveed-dev-weld.vercel.app",
              image: "https://naveed-dev-weld.vercel.app/og.image.png",
              sameAs: [
                "https://github.com/Naveed17",
                "https://www.linkedin.com/in/naveedahmed-webdev-js/",
              ],
              jobTitle: "Full-Stack Developer",
              description:
                "Full-Stack Developer building end-to-end web applications with the MERN stack — React, Node.js, MongoDB & Express.",
            }),
          }}
        />
      </head>
      <body className="bg-[var(--color-background)] text-[var(--color-foreground)] sm:px-28 lg:px-20 px-9 transition-colors duration-300">{children}</body>
    </html>
  );
}
