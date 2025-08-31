'use client'

import { Reviews } from '@/data/reviewsData'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import SwiperItem from '../SwiperItem/SwiperItem'
import styles from './ReviewSwiper.module.css'

const ReviewSwiper: React.FC = () => {
    return (
        <>
            <div className={styles.swiper}>
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={1}
                    autoplay={{
                        delay: 5500,
                        disableOnInteraction: false,
                    }}
                    loop
                >
                    {Reviews.map((review) => (
                        <SwiperSlide key={review.name}>
                            <SwiperItem review={review} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default ReviewSwiper
