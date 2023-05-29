import * as React from 'react';
import { cn } from '../utils';

const Checkbox = ({
  label,
  checked,
  onChange,
  className,
}: {
  label?: string;
  checked?: boolean;
  onChange?: Function;
  className?: string;
}) => {
  const handleChange = (e: any) => {
    onChange && onChange(e.target.checked);
  };
  return (
    <div className={cn(`flex items-center space-x-1`, className)}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => handleChange(e)}
      />
      <label>{label}</label>
    </div>
  );
};

export default Checkbox;
