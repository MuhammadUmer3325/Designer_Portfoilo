import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Art_Athlete - Professional Graphic Design Services',
  description: 'Professional graphic design services for gaming, sports, and business. Creating stunning visuals that bring your ideas to life.',
  generator: 'v0.dev',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
  icons: {
    icon: '/Favicon.png',
    shortcut: '/Favicon.png',
    apple: '/Favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
