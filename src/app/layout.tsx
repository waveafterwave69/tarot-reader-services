import type { Metadata } from 'next'
import { Playfair, Oswald } from 'next/font/google'
import './index.css'
import Header from '@/components/Header/Header'
import logo from '../assets/logo.png'
import Footer from '@/components/Footer/Footer'

const playfair = Playfair({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
})

const oswald = Oswald({
    subsets: ['latin'],
    variable: '--font-oswald',
    display: 'swap',
})

export const metadata: Metadata = {
    title: {
        template: '%s - Catarog | Услуги Таролога',
        default: 'Catarog | Онлайн Расклады Таро и Матрица Судьбы',
    },
    description:
        'Закажите онлайн расклад Таро у опытного таролога Catarog.  Профессиональные консультации по вопросам любви, карьеры, финансов и личностного роста.  Разбор матрицы судьбы, индивидуальные сессии.  Узнайте свое будущее с помощью Таро!', // Enhanced Description
    keywords:
        'таролог онлайн, расклад таро онлайн, гадание таро онлайн, матрица судьбы разбор, консультация таролога, услуги таролога онлайн, tarot reading online, онлайн гадание, прогноз таро, советы таролога, catarog таролог, catarog отзывы, таро для начинающих, обучение таро', // Expanded Keywords
    openGraph: {
        title: 'Catarog | Онлайн Расклады Таро и Матрица Судьбы',
        description:
            'Закажите онлайн расклад Таро у опытного таролога Catarog.  Профессиональные консультации по вопросам любви, карьеры, финансов и личностного роста.  Разбор матрицы судьбы, индивидуальные сессии.  Узнайте свое будущее с помощью Таро!',
        url: 'https://catarog.ru',
        siteName: 'Catarog',
        images: [
            {
                url: 'https://catarog.ru/favicon/favicon.svg', // Replace with a relevant image URL
                width: 800,
                height: 600,
            },
            {
                url: 'https://catarog.ru/favicon/favicon.svg', // Replace with a relevant image URLв
                width: 1800,
                height: 1600,
                alt: 'Catarog Logo',
            },
        ],
        locale: 'ru_RU',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': 'large',
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'google_verification_code',
        yandex: 'yandex_verification_code',
        other: {
            me: ['mailto:your_email@example.com'],
        },
    },
    icons: {
        icon: logo.src,
        apple: logo.src,
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ru">
            <body className={`${playfair.variable} ${oswald.variable}`}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
