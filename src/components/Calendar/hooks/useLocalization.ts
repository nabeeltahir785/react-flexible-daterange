import { useMemo } from 'react';
import type { CalendarLocalization } from '../types';
import { defaultLocalization } from '../utils/defaultLocalization';

export function useLocalization(localization?: Partial<CalendarLocalization>) {
  return useMemo(() => ({
    ...defaultLocalization,
    ...localization,
    weekDays: localization?.weekDays ?? defaultLocalization.weekDays,
    months: localization?.months ?? defaultLocalization.months,
    format: {
      ...defaultLocalization.format,
      ...localization?.format,
    },
  }), [localization]);
}