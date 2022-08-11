import Filter from 'pages/Menu/Filter';
import Itens from './Itens';
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
    <section className={styles.cardapio}>
      <h3 className={styles.cardapio__titulo}>Cardápio</h3>
      <Search search={search} setSearch={setSearch} />
      <div className={styles.cardapio__filtros}>
        <Filter filter={filter} setFilter={setFilter} />
        <Sort sort={sort} setSort={setSort} />
      </div>
      <Itens search={search} filter={filter} sort={sort}/>
    </section>
  );
}