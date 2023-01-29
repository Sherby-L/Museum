import styles from './Excursion.module.css';
import jonger from '../../img/jungerMikilanjelo.jpg';
import MoreButton from '../MoreButton';
import Title from '../Title';

const Excursion = () => {
  return (
    <div className={styles.excursion}>
      <Title title="ЭКСКУРСИИ" />
      <div>
        <img src={jonger} alt="jonger" />
      </div>
      <div className={styles.excursionParagrafs}>
        <p className={styles.excursionParagrafsOnline}>Онлайн-экскурсия</p>
        <h2 className={styles.excursionParagrafsTitle}>
          Встреча с шедеврами Караваджо
        </h2>
        <p className={styles.excursionParagrafsText}>
          Вы познакомитесь с шестью подлинными картинами итальянского гения,
          узнаете о методах работы Караваджо и современных находках историков и
          реставраторов. На экскурсии я расскажу вам, в каком русском музее
          находится первый вариант работы «Распятие святого Петра» и что
          случилось...
        </p>
        <p className={styles.excursionParagrafsTxt}>Июль 8 - 30</p>
        <p
          className={`${styles.excursionParagrafsTxt} ${styles.excursionParagrafsTime}`}
        >
          1,5 часа
        </p>
        <p
          className={`${styles.excursionParagrafsTxt} ${styles.excursionParagrafsBilet}`}
        >
          500р
        </p>
        <MoreButton />
      </div>
    </div>
  );
};

export default Excursion;
