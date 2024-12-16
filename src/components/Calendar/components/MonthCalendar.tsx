import React from 'react';
import { PreviewState } from '../types';
import { getDaysInMonth, getFirstDayOfMonth } from '../utils/dateCalculations';
import { MonthHeader } from './MonthHeader';
import { WeekDayHeader } from './WeekDayHeader';
import { DateCell } from './DateCell';

interface MonthCalendarProps {
  month: Date;
  preview: PreviewState;
  onDateClick: (date: Date) => void;
  onMouseEnter?: (date: Date) => void;
  onMouseLeave?: () => void;
  showNavigation?: boolean;
  onPrevMonth?: () => void;
  onNextMonth?: () => void;
  isMobile?: boolean;
}

export const MonthCalendar: React.FC<MonthCalendarProps> = ({
  month,
  preview,
  onDateClick,
  onMouseEnter,
  onMouseLeave,
  showNavigation,
  onPrevMonth,
  onNextMonth,
  isMobile,
}) => {
  const daysInMonth = getDaysInMonth(month);
  const firstDayOfMonth = getFirstDayOfMonth(month);
  const days = Array.from({ length: daysInMonth }, (_, i) => 
    new Date(month.getFullYear(), month.getMonth(), i + 1)
  );

  return (
    <div 
      className={`${isMobile ? 'w-full' : 'w-[320px]'}`}
      onMouseLeave={onMouseLeave}
    >
      <MonthHeader
        month={month}
        showNavigation={showNavigation}
        onPrevMonth={onPrevMonth}
        onNextMonth={onNextMonth}
      />
      <div className="grid grid-cols-7 gap-1">
        <WeekDayHeader />
        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <div key={`empty-${index}`} />
        ))}
        {days.map((date) => (
          <DateCell
            key={date.toISOString()}
            date={date}
            preview={preview}
            onDateClick={onDateClick}
            onMouseEnter={onMouseEnter}
          />
        ))}
      </div>
    </div>
  );
};