import PriceContent from '@/components/PriceContent/PriceContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Цены на Услуги - Catarog | Таролог Онлайн',
    description:
        'Ознакомьтесь с ценами на расклады Таро и разбор матрицы судьбы от таролога Catarog.  Подробный прайс-лист на все виды консультаций и онлайн гаданий.',
    keywords:
        'цены таролог, прайс-лист таролог, стоимость расклада таро, цена матрица судьбы, тарифы таролог онлайн, услуги таролога цены, стоимость гадания таро, catarog цены',
    openGraph: {
        title: 'Цены на Услуги - Catarog | Таролог Онлайн',
        description:
            'Ознакомьтесь с ценами на расклады Таро и разбор матрицы судьбы от таролога Catarog.  Подробный прайс-лист на все виды консультаций и онлайн гаданий.',
        url: 'https://catarog.ru/price',
        siteName: 'Catarog',
        images: [
            {
                url: 'https://catarog.ru/favicon/favicon.svg',
                width: 800,
                height: 600,
            },
            {
                url: 'https://catarog.ru/favicon/favicon.svg',
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
}
const PricePage: React.FC = () => {
    return (
        <>
            <PriceContent />
        </>
    )
}

export default PricePage
