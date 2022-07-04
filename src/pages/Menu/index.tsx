import Filter from 'pages/Menu/Filter';
import Itens from './Itens';
import logo from 'assets/logo.png';
import Search from 'pages/Menu/Search';
import Sort from 'pages/Menu/Sort';
import styles from './Menu.module.scss';
import { useState } from 'react';
import 'normalize.css';


export default function Menu() {

    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<number | null>(null);
    const [sort, setSort] = useState('');

    return (
        <main>
            <nav className={styles.menu}>
                <img src={logo} alt='La Cucina Vegana' width={180} />
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
                    <Filter filter={filter} setFilter={setFilter} />
                    <Sort sort={sort} setSort={setSort} />
                </div>
                <Itens />
            </section>
        </main>
    )
}