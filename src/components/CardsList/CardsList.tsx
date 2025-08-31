import { Cards } from '@/data/cardsData'
import styles from './CardsList.module.css'
import CardItem from '../CardItem/CardItem'
import ButtonUI from '@/shared/ui/ButtonUI/ButtonUI'

const CardsList: React.FC = () => {
    return (
        <>
            <section className={styles.list}>
                <div className="container">
                    <h2 className={styles.list__title}>
                        Мои раскалды покажут вам:
                    </h2>
                    <ul className={styles.cards__list}>
                        {Cards.map((card) => (
                            <CardItem key={card.title} card={card} />
                        ))}
                    </ul>
                    <ButtonUI
                        href="https://t.me/catarogin"
                        text="Сделать заказ"
                    />
                </div>
            </section>
        </>
    )
}

export default CardsList
