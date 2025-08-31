import Link from 'next/link'
import styles from './NavItem.module.css'
import { pagesConfig } from '@/config/pages'
import type { Menu } from '@/config/nav'

interface NavItemProps {
    menu: Menu
    isActive: boolean
}

const NavItem: React.FC<NavItemProps> = ({ menu, isActive }) => {
    return (
        <>
            <Link
                href={menu.href}
                className={
                    isActive
                        ? `${styles.nav__item} ${styles.active}`
                        : `${styles.nav__item}`
                }
            >
                {menu.name}
            </Link>
        </>
    )
}

export default NavItem
