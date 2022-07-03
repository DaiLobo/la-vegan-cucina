import styles from './Menu.module.scss';
import logo from 'assets/logo.png';
import 'normalize.css';


export default function Menu() {
    return (
        <main>
            <nav className={styles.menu}>
                <img src={logo} alt='La Cucina Vegana'  width={380} />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    La casa do código verde
                </div>
            </header>
        </main>
    )
}