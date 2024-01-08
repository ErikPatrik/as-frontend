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
            <body className="bg-slate-50 text-#726fea">{children}</body>
        </html>
    )
}
