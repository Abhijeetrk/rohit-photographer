import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rohit Nagre Photography | Professional Wedding, Portrait & Commercial Photographer',
  description: 'Official portfolio of Rohit Nagre Photography. Capturing life\'s most precious moments with world-class artistry — Weddings, Pre-Weddings, Portraits, Events & Commercial shoots across India.',
  keywords: 'Rohit Nagre, Rohit Nagre Photography, Wedding Photographer Mumbai India, Professional Photographer, Portrait, Pre-Wedding Shoot, Commercial Photography',
  openGraph: {
    title: 'Rohit Nagre Photography | Your Story. My Lens.',
    description: 'Your Story. My Lens. — Official photography portfolio of Rohit Nagre.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
