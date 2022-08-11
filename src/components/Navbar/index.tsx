import logo from 'assets/logo.png';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const rotas = [{
    label: 'Início',
    to: '/'
  }, {
    label: 'Cardápio',
    to: '/menu'
  }, {
    label: 'Sobre',
    to: '/about'
  }];
  return (
    <nav className={styles.menu}>
      <img src={logo} alt='La Cucina Vegana' width={180} />
      <ul className={styles.menu__list}>
        {rotas.map((rota, index) => (
          <li key={index} className={styles.menu__link}>
            <Link to={rota.to}>
              {rota.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}