import './styles/globals.css'
import WalletProvider from '../components/WalletProvider'
import TopNav from '../components/TopNav'

export const metadata = {
  title: 'MUDRIKĀ BLOCKCHAIN',
  description: 'Mudrikā Testnet Dashboard'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <WalletProvider>
          <div className="min-h-screen">
            <TopNav />
            <main className="p-6 max-w-screen-2xl mx-auto">{children}</main>
          </div>
        </WalletProvider>
      </body>
    </html>
  )
}
