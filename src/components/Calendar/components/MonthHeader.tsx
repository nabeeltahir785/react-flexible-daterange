import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MonthHeaderProps {
  month: Date;
  showNavigation?: boolean;
  onPrevMonth?: () => void;
  onNextMonth?: () => void;
}

export const MonthHeader: React.FC<MonthHeaderProps> = ({
  month,
  showNavigation,
  onPrevMonth,
  onNextMonth,
}) => (
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-lg font-semibold">
      {month.toLocaleString('default', { month: 'long', year: 'numeric' })}
    </h2>
    {showNavigation && (
      <div className="flex gap-2">
        <button
          onClick={onPrevMonth}
          className="p-1 hover:bg-gray-100 rounded-full"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={onNextMonth}
          className="p-1 hover:bg-gray-100 rounded-full"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    )}
  </div>
);