import Image from 'next/image'
import styles from './Promo.module.css'
import cardsLeft from '../../assets/cards-left.png'
import cardsRight from '../../assets/card-right.png'
import ButtonUI from '@/shared/ui/ButtonUI/ButtonUI'
const Promo: React.FC = () => {
    return (
        <>
            <section className={styles.promo}>
                <div className="container">
                    <div>
                        <Image
                            src={cardsLeft}
                            alt="карты-таро-картинка"
                            className={`${styles.promo__img} ${styles.img__left}`}
                        />
                        <Image
                            src={cardsRight}
                            alt="карты-таро-картинка"
                            className={`${styles.promo__img} ${styles.img__right}`}
                        />
                    </div>

                    <div className={styles.promo__content}>
                        <h1 className={styles.promo__tite}>Услуги Таролога</h1>
                        <p className={styles.promo__text}>
                            Расклады на картах Таро для любой сферы жизни.
                        </p>
                        <ButtonUI
                            href="https://t.me/catarogin"
                            text="Сделать заказ"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Promo
