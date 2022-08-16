import menu from 'data/menu.json';
import NotFound from 'pages/NotFound';
import styles from './Dish.module.scss';
import Tags from 'components/Tags';
import { useNavigate, useParams } from 'react-router-dom';

export default function Dish() {
  // const { state } = useLocation();
  // const { dish } = state as { dish: typeof menu[0] };
  const { id } = useParams();
  const navigate = useNavigate();
  const dish = menu.find(item => item.id === Number(id));

  if(!dish){
    return <NotFound />;
  }

  return (
    <>
      <button 
        className={styles.voltar}
        onClick={() => navigate(-1)}
      >
        {'< Voltar'}
      </button>
      <section className={styles.container}>
        <h1 className={styles.titulo}>
          { dish?.title }
        </h1>
        <div>
          <img src={ dish?.photo } alt={ dish?.title } />
        </div>
        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}>
            {dish?.description}
          </p>
          <Tags { ...dish } />
        </div>
      </section>
    </>
  );
}