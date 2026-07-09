import type { Metadata } from "next";
import "@styles/globals.css";

export const metadata: Metadata = {
  title: "Naveed Ahmed | Software Developer",
  description:
    "Naveed Ahmed - Software Developer building interactive and seamless digital experiences with cutting-edge frontend development.",
  metadataBase: new URL("https://oscarhernandez.vercel.app"),
  openGraph: {
    title: "Naveed Ahmed | Software Developer",
    description:
      "Portfolio of Naveed Ahmed, Software Developer specializing in frontend and interactive experiences.",
    url: "https://oscarhernandez.vercel.app",
    siteName: "Naveed Ahmed Portfolio",
    images: [{ url: "/og.image.png" }],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('theme'),d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(t===null&&d))document.documentElement.classList.add('dark')})()` }} />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="canonical" href="https://oscarhernandez.vercel.app/" />
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
              url: "https://oscarhernandez.vercel.app",
              image: "https://oscarhernandez.vercel.app/og.image.png",
              sameAs: [
                "https://github.com/Naveed17",
                "https://www.linkedin.com/in/naveedahmed-webdev-js/",
              ],
              jobTitle: "Software Developer",
              description:
                "Software Developer building interactive and seamless digital experiences.",
            }),
          }}
        />
      </head>
      <body className="bg-[var(--color-background)] text-[var(--color-foreground)] sm:px-28 lg:px-20 px-9 transition-colors duration-300">{children}</body>
    </html>
  );
}
