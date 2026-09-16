import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rohit Photographer | Professional Photography',
  description: 'Capturing life\'s most precious moments. Wedding, Portrait, Events & Commercial photography.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
