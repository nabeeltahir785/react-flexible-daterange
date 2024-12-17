import { MonthCalendar } from './components/MonthCalendar';
import { addMonths } from './utils/dateCalculations';
import type { CalendarProps } from './types';
import { useDateSelection } from './hooks/useDateSelection';
import { useMonthNavigation } from './hooks/useMonthNavigation';
import { X } from 'lucide-react';

export const Calendar: React.FC<CalendarProps> = ({ 
  value, 
  onChange, 
  maxDays = 7,
  onRemoveRange 
}) => {
  const { baseMonth, handlePrevMonth, handleNextMonth } = useMonthNavigation();
  const { 
    previewState, 
    handleDateClick, 
    handleMouseEnter,
    handleMouseLeave 
  } = useDateSelection(value, onChange, maxDays);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Mobile View */}
        <div className="md:hidden w-full">
          <MonthCalendar
            month={baseMonth}
            preview={previewState}
            onDateClick={handleDateClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            showNavigation={true}
            onPrevMonth={() => handlePrevMonth(true)}
            onNextMonth={() => handleNextMonth(true)}
            isMobile={true}
          />
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex gap-8">
          <MonthCalendar
            month={baseMonth}
            preview={previewState}
            onDateClick={handleDateClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            showNavigation={true}
            onPrevMonth={() => handlePrevMonth()}
            onNextMonth={() => handleNextMonth()}
          />
          <MonthCalendar
            month={addMonths(baseMonth, 1)}
            preview={previewState}
            onDateClick={handleDateClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Selected Ranges:</h2>
        {value.length === 0 ? (
          <p className="text-gray-500">No dates selected</p>
        ) : (
          <ul className="space-y-3">
            {value.map((range) => (
              <li 
                key={range.id} 
                className="flex items-center justify-between bg-white p-3 rounded-md shadow-sm"
              >
                <span className="text-gray-700">
                  {range.startDate?.toLocaleDateString()} - {range.endDate?.toLocaleDateString()}
                </span>
                <button
                    onClick={() => onRemoveRange?.(range.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                  aria-label="Remove date range"
                >
                  <X className="w-5 h-5" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};