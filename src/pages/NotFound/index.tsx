import classNames from 'classnames';
import styles from './NotFound.module.scss';
import stylesTema from 'styles/theme.module.scss';
import { ReactComponent as NotFoundImage } from 'assets/not_found.svg';

export default function NotFound() {
  return (
    <div className={classNames({
      [styles.container]: true,
      [stylesTema.container]: true
    })}>
      <NotFoundImage />
    </div>
  );
}