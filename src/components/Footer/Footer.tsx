import Image from 'next/image'
import styles from './Footer.module.css'
import tg from '../../assets/tg.svg'
import git from '../../assets/git.svg'

const Footer: React.FC = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className="container">
                    <div className={styles.footer__content}>
                        <div className={styles.socials}>
                            <h3 className={styles.socials__title}>Соц-сети:</h3>
                            <a
                                href="https://t.me/catarogin"
                                target="_blank"
                                className={styles.link}
                            >
                                <p>Телеграм канал</p>
                                <Image
                                    src={tg}
                                    alt="телеграм для заказа"
                                    className={styles.image}
                                />
                            </a>
                        </div>
                        <div className={styles.socials}>
                            <h3 className={styles.socials__title}>
                                Разработчик сайта:
                            </h3>
                            <a
                                href="https://github.com/waveafterwave69"
                                target="_blank"
                                className={styles.link}
                            >
                                <p>waveafterwave69</p>
                                <Image
                                    src={git}
                                    alt="гитхаб разработчика"
                                    className={styles.image}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
