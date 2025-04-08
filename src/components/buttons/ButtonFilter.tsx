import React from "react";
import './ButtonFilter.module.css';
import styles from './ButtonFilter.module.css';
import { useState } from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  isActive?: boolean; // Track whether the button is active or not
}

const ButtonFilter: React.FC<ButtonProps> = ({text, onClick, isActive }) => {
  const [active, setActive] = useState(isActive)
  const onClickHandler = () => {
    if (onClick) {
      onClick();
    }
    let value = active
    setActive(!value)
  };

  return (
    <button 
      onClick={onClickHandler} 
      className={active ? styles.active : ""}
    >
      {text}
    </button>
  );
};

export default ButtonFilter;
