import Link from "next/link"
import './globals.css'
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"

export const metadata = {
  title: 'O Voyages',
  description: 'Blog de voyages',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header/>
      {children}
     <Footer/>
      </body>
    </html>
  )
}
