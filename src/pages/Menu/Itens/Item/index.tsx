import styles from './Item.module.scss';
import Tags from 'components/Tags';
import { IDish } from 'types/Dish';
import { useNavigate } from 'react-router-dom';

export default function Item(props: IDish) {
  const { id, title, description, photo } = props;
  const navigate = useNavigate();
  
  return (
    <div className={styles.item} onClick={() => navigate(`/dish/${id}`)}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2> { title } </h2>
          <p> { description } </p>
        </div>
        <Tags {...props} />
      </div>
    </div>
  ); 
}