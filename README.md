## React Flexible DateRange

A flexible and customizable date range picker for React with multiple range selection support. This package was originally developed while working at Coredirection to address specific date range selection requirements in enterprise applications.

## Background

This package was developed during my time at Coredirection to solve complex date range selection challenges in enterprise applications. The existing solutions didn't provide the flexibility and customization options we needed for handling multiple date ranges with specific business rules.

### Features

- 📅 Multiple date range selections
- 📱 Responsive design (mobile-friendly)
- 🎨 Customizable theme
- 🌍 Internationalization support
- ⌨️ Keyboard navigation
- 🎯 TypeScript support
- 🎨 Tailwind CSS integration

### Installation

```bash
npm install react-flexible-daterange
# or
yarn add react-flexible-daterange
```

### Basic Usage

```tsx
import { Calendar } from 'react-flexible-daterange';
import type { DateRange } from 'react-flexible-daterange';

function App() {
  const [dateRanges, setDateRanges] = useState<DateRange[]>([]);

  return (
    <Calendar
      value={dateRanges}
      onChange={setDateRanges}
      maxDays={7}
    />
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | DateRange[] | [] | Selected date ranges |
| onChange | (ranges: DateRange[]) => void | - | Callback when ranges change |
| maxDays | number | 7 | Maximum total days that can be selected |
| minDate | Date | - | Minimum selectable date |
| maxDate | Date | - | Maximum selectable date |
| disabledDates | Date[] | - | Array of disabled dates |
| weekStartsOn | 0-6 | 0 | First day of week (0 = Sunday) |
| locale | string | 'en' | Locale for date formatting |
| theme | CalendarTheme | - | Custom theme options |
| showWeekNumbers | boolean | false | Show week numbers |
| monthsToShow | 1 \| 2 | 2 | Number of months to display |
| allowPastDates | boolean | false | Allow selecting past dates |
| formatDate | (date: Date) => string | - | Custom date formatting |
| className | string | - | Additional CSS classes |

### Theme Customization

```tsx
const theme: CalendarTheme = {
  colors: {
    primary: '#3B82F6',
    secondary: '#EFF6FF',
    hover: '#DBEAFE',
    disabled: '#E5E7EB',
    text: '#1F2937',
    textDisabled: '#9CA3AF',
  },
  borderRadius: '0.5rem',
  fontFamily: 'Inter, sans-serif',
};

<Calendar
  value={dateRanges}
  onChange={setDateRanges}
  theme={theme}
/>
```
### Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### License

MIT

## Author

Muhammad Nabeel Mehmood