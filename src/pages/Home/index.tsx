import menu from 'data/menu.json';
import styles from './Home.module.scss';
import stylesTema from '../../styles/theme.module.scss';

export default function Home() {
  let chefRecomended = [...menu];
  chefRecomended = chefRecomended.sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <section>
      <h3 className={stylesTema.titulo}>
        Recomendações da cozinha
      </h3>
      <div className={styles.recomendados}>
        {chefRecomended.map(item => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}> 
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={styles.recomendado__botao}>
              Ver mais
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}