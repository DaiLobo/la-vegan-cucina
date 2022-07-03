import filter from './filter.json';
import styles from './Filter.module.scss';

type IOption = typeof filter[0] ;

export default function Filter() {
    const selectFilter = (option: IOption) => {

    }
    return (
        <div className={styles.filtros}>
            {
                filter.map((option) => (
                    <button
                        className={styles.filtros__filtro}
                        key={option.id}
                        onClick={() => selectFilter(option)}>
                            {option.label}
                    </button>
                ))
            }
        </div>
    )
}