import React from 'react';
import slideone from '../../img/slideone.jpg';
import slidetwo from '../../img/slidetwo.jpg';
import slidethree from '../../img/slidethree.jpg';
import styles from './SliderImg.module.css';

const SliderImg = () => {
  return (
    <div className={styles.wrap}>
      <div>
        <img src={slideone} alt="slideone" />
      </div>
      <div>
        <img src={slidetwo} alt="slidetwo" />
        <p className={styles.text}>Тинторетто 1519-1594</p>
      </div>
      <div>
        <img src={slidethree} alt="slidethree" />
      </div>
    </div>
  );
};

export default SliderImg;
