import { useCallback, useState, useEffect } from 'react';
import { DateRange, PreviewState } from '../types';
import { getTotalDaysInRanges } from '../utils/dateValidation';
import { generateId } from '../utils/idGenerator';
import { PREVIEW_RANGE_ID } from '../utils/constants';

export function useDateSelection(
  value: DateRange[],
  onChange: (ranges: DateRange[]) => void,
  maxDays: number,
) {
  const [hoverDate, setHoverDate] = useState<Date | null>(null);
  const [activeRange, setActiveRange] = useState<DateRange | null>(null);

  useEffect(() => {
    if (value.length === 0) {
      setActiveRange(null);
      setHoverDate(null);
    }
  }, [value.length]);

  const handleDateClick = useCallback((date: Date) => {
    if (!activeRange?.startDate) {
      setActiveRange({ 
        id: generateId(), 
        startDate: date, 
        endDate: null 
      });
    } else {
      const newRange = { 
        id: activeRange.id, 
        startDate: activeRange.startDate,
        endDate: date
      };
      
      // Swap dates if end date is before start date
      if (date < activeRange.startDate) {
        newRange.startDate = date;
        newRange.endDate = activeRange.startDate;
      }
      
      const totalDays = getTotalDaysInRanges([...value, newRange]);
      
      if (totalDays <= maxDays) {
        onChange([...value, newRange]);
      }
      
      setActiveRange(null);
      setHoverDate(null);
    }
  }, [value, onChange, maxDays, activeRange]);

  const handleMouseEnter = useCallback((date: Date) => {
    if (activeRange?.startDate) {
      const previewRange = {
        id: PREVIEW_RANGE_ID,
        startDate: activeRange.startDate,
        endDate: date
      };
      
      // Create a temporary range for validation
      const tempRange = {
        ...previewRange,
        startDate: date < activeRange.startDate ? date : activeRange.startDate,
        endDate: date < activeRange.startDate ? activeRange.startDate : date
      };
      
      const totalDays = getTotalDaysInRanges([
        ...value,
        tempRange
      ]);
      
      if (totalDays <= maxDays) {
        setHoverDate(date);
      }
    }
  }, [activeRange, value, maxDays]);

  const handleMouseLeave = useCallback(() => {
    setHoverDate(null);
  }, []);

  const previewState: PreviewState = {
    ranges: value,
    activeRange,
    hoverRange: activeRange?.startDate && hoverDate ? {
      id: PREVIEW_RANGE_ID,
      startDate: activeRange.startDate,
      endDate: hoverDate
    } : null
  };

  return {
    previewState,
    handleDateClick,
    handleMouseEnter,
    handleMouseLeave
  };
}