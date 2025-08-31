import Image from 'next/image'
import ReviewSwiper from '../ReviewSwiper/ReviewSwiper'
import styles from './Reviews.module.css'
import bgImg from '../../assets/reviews.png'

const Reviews: React.FC = () => {
    return (
        <>
            <section className={styles.reviews}>
                <div className="container">
                    <div className={styles.reviews__content}>
                        <h2 className={styles.review__title}>
                            Реальные Отзывы
                        </h2>
                        <Image
                            src={bgImg}
                            alt="карты таро"
                            className={styles.review__bg}
                        />
                    </div>
                    <ReviewSwiper />
                </div>
            </section>
        </>
    )
}

export default Reviews
