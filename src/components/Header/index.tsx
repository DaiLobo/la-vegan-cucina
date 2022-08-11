import { Outlet } from 'react-router-dom';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
      La casa do código verde
        </div>
      </header>
      < Outlet />
    </>
  );
}