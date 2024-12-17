import { useMemo } from 'react';
import { CalendarTheme } from '../types';
import { defaultTheme } from '../utils/defaultTheme';
import { twMerge } from 'tailwind-merge';

const defaultTransition = {
  duration: 'duration-200',
  timing: 'ease-in-out'
};

export function useTheme(theme?: Partial<CalendarTheme>) {
  return useMemo(() => {
    const merged = {
      colors: { ...defaultTheme.colors, ...theme?.colors },
      sizes: { ...defaultTheme.sizes, ...theme?.sizes },
      animations: {
        transition: {
          ...defaultTransition,
          ...defaultTheme.animations?.transition,
          ...theme?.animations?.transition
        }
      },
      className: { ...defaultTheme.className, ...theme?.className },
    };
    return {
      container: twMerge(
        'bg-white rounded-lg shadow-sm',
        merged.className?.container
      ),
      header: twMerge(
        'text-lg font-semibold',
        merged.className?.header
      ),
      weekday: twMerge(
        'text-sm font-medium text-gray-500',
        merged.className?.weekday
      ),
      date: twMerge(
        'transition-all',
        merged.animations.transition.duration,
        merged.animations.transition.timing,
        merged.className?.date
      ),
      selected: twMerge(
        'bg-blue-500 text-white',
        merged.className?.selected
      ),
      disabled: twMerge(
        'text-gray-300 cursor-not-allowed',
        merged.className?.disabled
      ),
      ...merged,
    };
  }, [theme]);
}