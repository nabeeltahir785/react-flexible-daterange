import { CalendarTheme } from '../types';

export const defaultTheme: CalendarTheme = {
  colors: {
    primary: '#3B82F6',
    secondary: '#EFF6FF',
    hover: '#DBEAFE',
    selected: '#2563EB',
    disabled: '#E5E7EB',
    text: {
      primary: '#1F2937',
      secondary: '#6B7280',
      disabled: '#9CA3AF',
    },
    border: '#E5E7EB',
  },
  sizes: {
    cell: {
      width: '2.5rem',
      height: '2.5rem',
    },
    fontSize: {
      header: '1.125rem',
      weekday: '0.875rem',
      date: '0.875rem',
    },
    spacing: {
      cell: '0.25rem',
      container: '1rem',
    },
    borderRadius: {
      cell: '0.375rem',
      container: '0.5rem',
    },
  },
  animations: {
    transition: {
      duration: '150ms',
      timing: 'ease-in-out',
    },
    hover: {
      scale: '1.05',
      shadow: 'sm',
    },
  },
  className: {
    container: '',
    header: '',
    weekday: '',
    date: '',
    selected: '',
    disabled: '',
  },
};