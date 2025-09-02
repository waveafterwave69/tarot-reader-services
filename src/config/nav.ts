import { pagesConfig } from './pages'

export interface Menu {
    href: string
    name: string
}

export const navConfig: Menu[] = [
    {
        href: pagesConfig.home,
        name: 'Главная',
    },
    {
        href: pagesConfig.price,
        name: 'Прайс-Лист',
    },
    // {
    //     href: pagesConfig.matrix,
    //     name: 'Матрица-Судьбы',
    // },
]
