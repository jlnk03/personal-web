import { Urbanist } from 'next/font/google'
import './globals.css'
import './style.css'
import Navigation from '@/components/Navigation'

// const inter = Inter({ subsets: ['latin'] })

// const playfair = Playfair_Display({
//   subsets: ['latin'],
//   display: 'swap',
// })

const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Julian Link',
  description: 'Portfolio of Julian Link',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navigation>
          {children}
        </Navigation>
      </body>
    </html>
  )
}
