import styles from './Main.module.css';
import MainButton from '../MainButton';
import MainLogo from '../MainLogo/MainLogo';

const Main = () => {
  return (
    <div className={styles.main}>
      <MainLogo />
      <p className={styles.mainText}>
        В музеи Ренессанса экскурсии посвящены искусству Возрождения – периода,
        который называют эпохой открытия мира и человека в искусстве. Живопись в
        это время – окно в огромный мир, а герой картин человек, наделенный
        добродетелью и доблестью.
      </p>
      <MainButton />
    </div>
  );
};

export default Main;
