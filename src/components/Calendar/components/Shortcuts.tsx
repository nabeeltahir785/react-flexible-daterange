import React from 'react';
import type { DateRange } from '../types';

interface ShortcutsProps {
  shortcuts: Array<{
    label: string;
    getValue: () => DateRange;
  }>;
  onSelect: (range: DateRange) => void;
  className?: string;
}

export const Shortcuts: React.FC<ShortcutsProps> = ({
  shortcuts,
  onSelect,
  className,
}) => (
  <div className={`flex flex-wrap gap-2 ${className}`}>
    {shortcuts.map((shortcut, index) => (
      <button
        key={index}
        onClick={() => onSelect(shortcut.getValue())}
        className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
      >
        {shortcut.label}
      </button>
    ))}
  </div>
);