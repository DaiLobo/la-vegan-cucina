import { Outlet } from 'react-router-dom';
import styles from './Header.module.scss';
import stylesTema from '../../styles/theme.module.scss';

export default function Header({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
      La casa do código verde
        </div>
      </header>
      <div className={stylesTema.container}>
        <Outlet />
        { children }
      </div>
    </>
  );
}