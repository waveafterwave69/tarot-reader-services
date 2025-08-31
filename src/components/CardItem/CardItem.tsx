import type { ICardItem } from '@/shared/types/cardsType'
import styles from './CardItem.module.css'
import Image from 'next/image'

interface CardItemProps {
    card: ICardItem
}

const CardItem: React.FC<CardItemProps> = ({ card }) => {
    return (
        <>
            <li className={styles.card}>
                <Image
                    src={card.img}
                    alt={card.title}
                    className={styles.card__img}
                />
                <h3 className={styles.card__title}>{card.title}</h3>
                <p className={styles.card__text}>{card.description}</p>
            </li>
        </>
    )
}

export default CardItem
