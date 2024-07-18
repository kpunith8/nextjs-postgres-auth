import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from './components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next JS postgres + kinde auth app',
  description: 'Next JS postgres and kinde auth app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
