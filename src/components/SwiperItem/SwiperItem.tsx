import type { IReviewItem } from '@/shared/types/reviewsType'
import styles from './SwiperItem.module.css'

interface SwiperItemProps {
    review: IReviewItem
}

const SwiperItem: React.FC<SwiperItemProps> = ({ review }) => {
    return (
        <>
            <div className={styles.review}>
                <p className={styles.review__text}>{review.text}</p>
                <p className={styles.review__name}>{review.name}</p>
            </div>
        </>
    )
}

export default SwiperItem
