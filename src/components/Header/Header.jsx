import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerLogo}></div>
      <div className={styles.headerMenu}></div>
    </div>
  );
};

export default Header;
