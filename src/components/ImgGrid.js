import React from 'react';
import styles from './ImgGrid.module.css';

const ImgGrid = props => {
  const {images} = props;

  return (
    <div className={styles.gridContainer}>
      {images.map(img => (
        <div className={styles.gridItem}>
          <img src={img.urls.small} alt={img.description} key={img.id} />
        </div>
      ))}
    </div>
  )
}

export default ImgGrid;