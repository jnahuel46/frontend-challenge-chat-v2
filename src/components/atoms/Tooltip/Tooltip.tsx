import React, { useState } from 'react';
import styles from './Tooltip.module.scss';

interface TooltipProps {
  message: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

const Tooltip: React.FC<TooltipProps> = ({
  message,
  children,
  position = 'top'
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={styles.tooltipContainer}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className={`${styles.tooltip} ${styles[position]}`}>
          {message}
        </div>
      )}
    </div>
  );
};

export default Tooltip;