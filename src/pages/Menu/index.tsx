import Filter from 'pages/Filter';
import logo from 'assets/logo.png';
import Search from 'pages/Search';
import styles from './Menu.module.scss';
import { useState } from 'react';
import 'normalize.css';


export default function Menu() {

    const [search, setSearch] = useState('');

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
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio_titulo}>Cardápio</h3>
                <Search search={search} setSearch={setSearch} />
                <div className={styles.cardapio__filtros}>
                    <Filter />
                </div>
            </section>
        </main>
    )
}