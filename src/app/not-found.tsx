import { pagesConfig } from '@/config/pages'
import Link from 'next/link'

import styles from './not-found.module.css'

const NotFound: React.FC = () => {
    return (
        <>
            <div className={styles.error}>
                <h3 className={styles.error__title}>404</h3>
                <p className={styles.error__subtitle}>
                    Ошибка: страница не найдена
                </p>
                <Link href={pagesConfig.home} className={styles.error__button}>
                    Вернуться на главную
                </Link>
            </div>
        </>
    )
}

export default NotFound
