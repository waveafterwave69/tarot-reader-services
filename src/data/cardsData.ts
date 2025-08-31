import type { ICardItem } from '@/shared/types/cardsType'
import img1 from '../assets/card1.svg'
import img2 from '../assets/card2.svg'
import img3 from '../assets/card3.svg'

export const Cards: ICardItem[] = [
    {
        img: img1,
        title: 'Личные отношения',
        description:
            'Не знаете как поступить, стоит ли оставаться в текущих отношениях или они обречены, или просто хотите узнать что угодно об отношениях',
    },
    {
        img: img2,
        title: 'Финансы',
        description:
            'Помогает проанализировать финансовую сферу в настоящем и разобрать потенциальное будущее',
    },
    {
        img: img3,
        title: 'Карьера',
        description:
            'Расклад отлично подойдет если хотите узнать о своем успехе в карьерном росте или что делать чтобы добиться своих целей ',
    },
]
