'use client'

import styles from './Nav.module.css'
import { usePathname } from 'next/navigation'
import NavItem from '../NavItem/NavItem'
import { navConfig } from '@/config/nav'

const Nav: React.FC = () => {
    const pathname = usePathname()

    return (
        <>
            <nav className={styles.nav}>
                {navConfig.map((menu) => (
                    <NavItem
                        key={menu.name}
                        menu={menu}
                        isActive={pathname === menu.href}
                    />
                ))}
            </nav>
        </>
    )
}

export default Nav
