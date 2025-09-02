import { Prices } from '@/data/priceData'
import styles from './PriceContent.module.css'
import PriceCardItem from '../PriceCardItem/PriceCardItem'

const PriceContent: React.FC = () => {
    return (
        <>
            <section className={styles.price}>
                <div className="container">
                    <h2 className={styles.price__title}>Прайс-Лист</h2>
                    <div className={styles.price__content}>
                        <ul className={styles.price__list}>
                            {Prices.map((item, id) => (
                                <PriceCardItem
                                    key={id}
                                    price={item.price}
                                    types={item.types}
                                    title={item.title}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PriceContent
