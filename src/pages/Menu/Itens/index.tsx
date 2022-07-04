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
        return regex.test(title)
    }

    function testaFiltro(id: number) {
        if(filter !== null) return filter === id;
        return true;
    }

    useEffect(() => {
        const newList = menu.filter(
            item => testaBusca(item.title) && testaFiltro(item.category.id));
            setList(newList);
    },[search, filter])

    return (
        <div className={styles.itens}>
            {list.map(item => (
                <Item 
                key={item.id}
                {...item}
                />
            ))}
        </div>
    )
}