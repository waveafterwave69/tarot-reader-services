import styles from './ButtonUI.module.css'

interface ButtonUIProps {
    href: string
    text: string
}

const ButtonUI: React.FC<ButtonUIProps> = ({ href, text }) => {
    return (
        <>
            <button className={styles.button}>
                <a href={href} target="_blank">
                    {text}
                </a>
            </button>
        </>
    )
}

export default ButtonUI
