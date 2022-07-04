import options from './option.json';
import styles from './Sort.module.scss';

export default function Sort() {
    return (
        <button className={styles.ordenador}>
            <span>Ordenar Por</span>
            <div className={styles.ordenador__options}>
                {options.map(option => (
                    <div className={styles.ordenador__option} key={option.value}>
                        {option.nome}
                    </div>
                ))}
            </div>
        </button>
    )
}