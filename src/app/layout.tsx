import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Discord logs',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br">
            <body className="bg-blue-200 text-black">{children}</body>
        </html>
    )
}
