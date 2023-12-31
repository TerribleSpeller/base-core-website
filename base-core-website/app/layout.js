import './globals.css'
import './page.module.css'
import Navbar from './components/NavBar.jsx'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import BotBar from './components/BottomBar.jsx'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BASE Core Website',
  description: 'Generated by create next app',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={inter.className} >
        <div className="colorsetter">
          <Navbar />
          {children}
          <BotBar />
        </div>

      </body>    
    </html>

  )
}
