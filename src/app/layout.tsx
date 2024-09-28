import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider, Toaster } from '@/components/index'
import { Sound } from '@/components'

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
        </ThemeProvider>
      </body>
    </html>
  )
}
