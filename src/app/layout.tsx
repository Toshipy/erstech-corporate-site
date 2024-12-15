import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'
import { ThemeProvider } from '@/components/ui/ThemeProvider/ThemeProvider'
import { Toaster } from '@/components/ui/Toast/Toaster'

export const metadata: Metadata = {
  title: 'Erstech corporate-site'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src={`"https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"`}
          strategy="afterInteractive"
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `
          }}
          id="gtag-init"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <main>{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
