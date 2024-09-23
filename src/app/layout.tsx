import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { ThemeProvider, Toaster, Sound } from '@/components/index'

export const metadata: Metadata = {
  title: 'Erstech corporate-site',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
          <Toaster />
          <Sound />
          {/* <div id="my-modal" /> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
