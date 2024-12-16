import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { isSameDay, getDaysInMonth, getFirstDayOfMonth, isDateInRange, isPastDate } from './utils';
import type { DateRange } from './types';

interface MonthCalendarProps {
  month: Date;
  value: DateRange;
  onDateClick: (date: Date) => void;
  onMouseEnter?: (date: Date) => void;
  showNavigation?: boolean;
  onPrevMonth?: () => void;
  onNextMonth?: () => void;
}

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const MonthCalendar: React.FC<MonthCalendarProps> = ({
  month,
  value,
  onDateClick,
  onMouseEnter,
  showNavigation,
  onPrevMonth,
  onNextMonth,
}) => {
  const daysInMonth = getDaysInMonth(month);
  const firstDayOfMonth = getFirstDayOfMonth(month);
  const days = Array.from({ length: daysInMonth }, (_, i) => new Date(month.getFullYear(), month.getMonth(), i + 1));

  return (
    <div className="w-full max-w-sm">
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
      <div className="grid grid-cols-7 gap-1">
        {weekDays.map((day) => (
          <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
            {day}
          </div>
        ))}
        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <div key={`empty-${index}`} />
        ))}
        {days.map((date) => {
          const isSelected = value.startDate && value.endDate && isDateInRange(date, value.startDate, value.endDate);
          const isStart = value.startDate && isSameDay(date, value.startDate);
          const isEnd = value.endDate && isSameDay(date, value.endDate);
          const isDisabled = isPastDate(date);

          return (
            <button
              key={date.toISOString()}
              onClick={() => !isDisabled && onDateClick(date)}
              onMouseEnter={() => !isDisabled && onMouseEnter?.(date)}
              disabled={isDisabled}
              className={`
                h-10 w-full rounded-md text-sm relative
                ${isDisabled ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-gray-100'}
                ${isSelected ? 'bg-blue-50' : ''}
                ${isStart ? 'bg-blue-500 text-white hover:bg-blue-600' : ''}
                ${isEnd ? 'bg-blue-500 text-white hover:bg-blue-600' : ''}
              `}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
};