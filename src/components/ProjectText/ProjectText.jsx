import React from 'react';
import styles from './ProjectText.module.css';

const ProjectText = ({ text }) => {
  return <p className={styles.text}>{text}</p>;
};

export default ProjectText;
