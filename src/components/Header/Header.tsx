import Nav from '../Nav/Nav'
import styles from './Header.module.css'

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <Nav />
            </div>
        </header>
    )
}

export default Header
