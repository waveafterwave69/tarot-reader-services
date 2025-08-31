import styles from './AboutMe.module.css'

const AboutMe: React.FC = () => {
    return (
        <>
            <section className={styles.about}>
                <div className="container">
                    <h2 className={styles.about__title}>Обо мне</h2>
                    <div className={styles.text__content}>
                        <p className={styles.about__text}>
                            Приветствую вас! Меня зовут Соня, и я рада, что вы
                            заглянули на мой сайт, я занимаюсь раскладами на
                            Таро и помогу вам разобраться в любой сфере жизни.
                        </p>
                        <p className={styles.about__text}>
                            Хотите узнать о своей личности, карьере, отношениях
                            или самореализации? Не стесняйтесь задавать любые
                            вопросы - я с радостью на них отвечу.
                        </p>
                    </div>
                    <span className={styles.about__link}>
                        Телеграм:{' '}
                        <a href="https://t.me/cotgne" target="_blank">
                            @cotgne
                        </a>
                    </span>

                    <div className={styles.button__row}>
                        <div className={styles.about__button}>стаж 2+ года</div>
                        <div className={styles.about__button}>200+ отзывов</div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutMe
