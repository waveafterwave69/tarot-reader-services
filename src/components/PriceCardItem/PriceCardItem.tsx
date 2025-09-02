import styles from './PriceCardItem.module.css'

interface PriceCardItemProps {
    title?: string
    price: number
    types: string[]
}

const PriceCardItem: React.FC<PriceCardItemProps> = ({
    title,
    price,
    types,
}) => {
    return (
        <>
            <div className={styles.price__card}>
                {title && <h3 className={styles.card__title}>{title}</h3>}
                <p className={styles.card__price}>{price} рублей:</p>
                <ul className={styles.card__list}>
                    {types.map((type, index) => (
                        <li className={styles.list__item} key={index}>
                            {type}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default PriceCardItem
