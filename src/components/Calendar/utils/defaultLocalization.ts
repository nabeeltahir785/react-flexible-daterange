import type { CalendarLocalization } from '../types';

export const defaultLocalization: CalendarLocalization = {
  locale: 'en',
  weekDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  months: [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ],
  today: 'Today',
  clear: 'Clear',
  selectDate: 'Select date',
  format: {
    date: 'MM/dd/yyyy',
    month: 'MMMM yyyy',
    year: 'yyyy',
  },
};