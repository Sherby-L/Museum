import React from 'react';
import styles from './SliderMain.module.css';

const SliderMain = () => {
  return (
    <div className={styles.circleWrapper}>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.circleActive}></div>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
    </div>
  );
};

export default SliderMain;
