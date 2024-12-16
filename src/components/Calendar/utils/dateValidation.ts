import { DateRange } from '../types';

export const isPastDate = (date: Date): boolean => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date < today;
};

export const isDateInRange = (date: Date, startDate: Date | null, endDate: Date | null): boolean => {
  if (!startDate || !endDate) return false;
  return date >= startDate && date <= endDate;
};

export const isDateInAnyRange = (date: Date, ranges: DateRange[]): boolean => {
  return ranges.some(range => isDateInRange(date, range.startDate, range.endDate));
};

export const getTotalDaysInRanges = (ranges: DateRange[]): number => {
  return ranges.reduce((total, range) => {
    if (range.startDate && range.endDate) {
      return total + getDaysBetweenDates(range.startDate, range.endDate);
    }
    return total;
  }, 0);
};

export const getDaysBetweenDates = (startDate: Date, endDate: Date): number => {
  const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
};