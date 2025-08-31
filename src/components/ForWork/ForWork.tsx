import ButtonUI from '@/shared/ui/ButtonUI/ButtonUI'
import styles from './ForWork.module.css'
import books from '../../assets/work.png'
import Image from 'next/image'

const ForWork: React.FC = () => {
    return (
        <>
            <section className={styles.work}>
                <div className="container">
                    <div className={styles.text__content}>
                        <h2 className={styles.work__title}>
                            Для работы мне нужно:
                        </h2>
                        <ul className={styles.work__list}>
                            <li className={styles.list__item}>имена</li>
                            <li className={styles.list__item}>возраст</li>
                            <li className={styles.list__item}>
                                небольшая предыстория
                            </li>
                            <li className={styles.list__item}>фотографии</li>
                            <li className={styles.list__item}>
                                вопросы / какой расклад выбрали
                            </li>
                        </ul>
                        <ButtonUI
                            href="https://t.me/catarogin"
                            text="Посмотреть расклады"
                        />
                    </div>
                </div>
                <Image src={books} alt="книги" className={styles.work__img} />
            </section>
        </>
    )
}

export default ForWork
