import styles from './About.module.scss';
import stylesTema from 'styles/theme.module.scss';
import casa from 'assets/about/casa.jpg';
import vegetais1 from 'assets/about/vegetais1.jpg';
import vegetais2 from 'assets/about/vegetais2.jpg';

export default function About () {
  const imagens = [vegetais1, vegetais2];
  return (
    <section>
      <h3 className={stylesTema.titulo}>
        Sobre
      </h3>
      <div className={styles.sobreNos}>
        <img src={casa} alt='Casa Vegana' />
        <div className={styles.sobreNos__texto}>
          <p>
            Nós de La Cucina Vegana oferecemos a vocês, nossos queridos clientes, as comidas veganas mais saborosa e sofisticada do Rio de Janeiro! Prezamos pelo sabor das comidas, com vegetais frescos e de excelente qualidade para que sua experiência seja deliciosa!
          </p>
          <p>
            Também possuímos uma cardápio diversificado com muitas opções de acordo com o seu gosto!
          </p>
          <p>
            Para acompanhar os vegetais, La Cucina Vegana possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto!
          </p>
        </div>
      </div>
      <div className={styles.imagens}>
        {
          imagens.map((imagem, index) => (
            <div key={index} className={styles.imagens__imagem}>
              <img src={imagem} alt='imagem de vegetais' />
            </div>
          ))
        }
      </div>
    </section>
  );
}