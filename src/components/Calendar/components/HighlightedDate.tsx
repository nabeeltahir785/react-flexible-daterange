import React from 'react';
import { Tooltip } from './Tooltip';

interface HighlightedDateProps {
  date: Date;
  color?: string;
  tooltip?: string;
  children: React.ReactNode;
}

export const HighlightedDate: React.FC<HighlightedDateProps> = ({
  date,
  color,
  tooltip,
  children,
}) => (
  <div
    className="relative"
    style={{ 
      '--highlight-color': color 
    } as React.CSSProperties}
  >
    {tooltip && <Tooltip content={tooltip} />}
    <div
      className={`
        absolute -top-1 -right-1 w-2 h-2 rounded-full
        ${color ? '' : 'bg-blue-500'}
      `}
      style={color ? { backgroundColor: color } : undefined}
    />
    {children}
  </div>
);