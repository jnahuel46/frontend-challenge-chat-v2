import React, { forwardRef } from 'react';
import styles from './Input.module.scss';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  'aria-label'?: string;
  autoFocus?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  value,
  onChange,
  placeholder = '',
  disabled = false,
  className = '',
  onKeyDown,
  'aria-label': ariaLabel,
  autoFocus = false,
}, ref) => {
  const classes = `${styles.input} ${className}`;

  return (
    <input
      ref={ref}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
      className={classes}
      onKeyDown={onKeyDown}
      aria-label={ariaLabel}
      autoFocus={autoFocus}
    />
  );
});

Input.displayName = 'Input';

export default Input;