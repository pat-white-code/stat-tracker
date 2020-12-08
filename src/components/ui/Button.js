import React from 'react';
import styles from '../styles/Button.module.scss';


const Button = (props) => {
  
  return (
    <button 
      className={`${styles['button']} 
      ${styles[props.active]} 
      ${styles[props.actionButton]}
      `
      }
      onClick={props.onClick}
      >

      {props.children}

    </button>
  )
}

export default Button;