import type { Metadata, Viewport } from 'next'
import { Lora, Inter } from 'next/font/google'

import './globals.css'

const _lora = Lora({ subsets: ['latin'], variable: '--font-lora' })
const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'PLG Workshop Summary | Change.vote',
  description: 'Product-Led Growth workshop exploring user motivations, personas, and growth mechanics for organic adoption.',
  robots: {
    index: false,
    follow: false,
  }
}

export const viewport: Viewport = {
  themeColor: '#f5f5f0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_lora.variable} ${_inter.variable} font-serif antialiased`}>{children}</body>
    </html>
  )
}
