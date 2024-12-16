import React from 'react';
import { PreviewState } from '../types';
import { isSameDay } from '../utils/dateCalculations';
import { isDateInAnyRange, isPastDate } from '../utils/dateValidation';

interface DateCellProps {
  date: Date;
  preview: PreviewState;
  onDateClick: (date: Date) => void;
  onMouseEnter?: (date: Date) => void;
}

export const DateCell: React.FC<DateCellProps> = ({
  date,
  preview,
  onDateClick,
  onMouseEnter,
}) => {
  const isSelected = isDateInAnyRange(date, preview.ranges);
  
  const isInHoverRange = preview.hoverRange && (() => {
    const start = preview.hoverRange.startDate!;
    const end = preview.hoverRange.endDate!;
    return date >= (start < end ? start : end) && 
           date <= (start < end ? end : start);
  })();
  
  const isActiveStart = preview.activeRange?.startDate && 
    isSameDay(date, preview.activeRange.startDate);
    
  const isRangeStart = preview.ranges.some(range => 
    range.startDate && isSameDay(date, range.startDate)
  );
  
  const isRangeEnd = preview.ranges.some(range => 
    range.endDate && isSameDay(date, range.endDate)
  );
  
  const isDisabled = isPastDate(date);

  return (
    <button
      onClick={() => !isDisabled && onDateClick(date)}
      onMouseEnter={() => !isDisabled && onMouseEnter?.(date)}
      disabled={isDisabled}
      className={`
        h-10 w-full rounded-md text-sm relative transition-colors
        ${isDisabled ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-gray-100'}
        ${(isSelected || isInHoverRange) && !isActiveStart && !isRangeStart && !isRangeEnd ? 'bg-blue-50' : ''}
        ${(isRangeStart || isActiveStart || isRangeEnd) ? 'bg-blue-500 text-white hover:bg-blue-600' : ''}
      `}
    >
      {date.getDate()}
    </button>
  );
};