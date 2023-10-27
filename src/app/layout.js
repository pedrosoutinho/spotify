import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import Footer from './components/footer'
import Navbar from './components/navbar'
import { Inter } from 'next/font/google'
import UserProvider from "./components/userProvider.js";
import ImportBsJS from "./components/importBsJS.js";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Unispot',
    description: 'Ouça suas músicas quando e onde quiser!',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ImportBsJS />
                <UserProvider>
                    <Navbar />
                    {children}
                    <Footer />
                </UserProvider>
            </body>
        </html>
    )
}
