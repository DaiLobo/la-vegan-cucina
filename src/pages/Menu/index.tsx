import styles from './Menu.module.scss';
import logo from 'assets/logo.png'

export default function Menu() {
    return (
        <main>
            <nav className={styles.menu}>
                <img src={logo} alt='La Cucina Vegana'  width={380} />
            </nav>
        </main>
    )
}