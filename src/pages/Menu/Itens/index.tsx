import Item from './Item';
import menu from './itens.json';
import styles from './Itens.module.scss';
import { useEffect, useState } from 'react';

interface Props {
    search: string,
    filter: number | null,
    sort: string,
}

export default function Itens({
  search,
  filter,
  sort 
}: Props) {

  const [list, setList] = useState(menu);

  function testaBusca(title: string) {
    const regex = new RegExp(search, 'i');
    return regex.test(title);
  }

  function testaFiltro(id: number) {
    if(filter !== null) return filter === id;
    return true;
  }

  function toSort(newList: typeof menu) {
    switch(sort) {
    case 'porcao':
      return newList.sort((a, b) => a.size > b.size ? 1 : -1);
    case 'qtd_pessoas':
      return newList.sort((a, b) => a.serving > b.serving ? 1 : -1);
    case 'preco':
      return newList.sort((a, b) => a.price > b.price ? 1 : -1);
    default:
      return newList;
    }
  }

  useEffect(() => {
    const newList = menu.filter(
      item => testaBusca(item.title) && testaFiltro(item.category.id));
    setList(toSort(newList));
  },[search, filter, sort]);

  return (
    <div className={styles.itens}>
      {list.map(item => (
        <Item 
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
}