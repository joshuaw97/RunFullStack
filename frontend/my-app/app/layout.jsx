import Navbar from './components/Navbar'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {/* Layout UI */}
        <main>{children}</main>
      </body>
    </html>
  )
}