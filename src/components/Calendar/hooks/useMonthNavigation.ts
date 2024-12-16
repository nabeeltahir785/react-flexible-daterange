import { useState, useCallback } from 'react';
import { addMonths } from '../utils/dateCalculations';

export function useMonthNavigation() {
  // Start with the current month
  const [baseMonth, setBaseMonth] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });

  const handlePrevMonth = useCallback((isMobile: boolean = false) => {
    setBaseMonth(prev => addMonths(prev, isMobile ? -1 : -2));
  }, []);

  const handleNextMonth = useCallback((isMobile: boolean = false) => {
    setBaseMonth(prev => addMonths(prev, isMobile ? 1 : 2));
  }, []);

  return {
    baseMonth,
    handlePrevMonth,
    handleNextMonth
  };
}