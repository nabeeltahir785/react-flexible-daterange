// Add localization types
export interface CalendarLocalization {
  locale?: string;
  weekDays?: string[];
  months?: string[];
  today?: string;
  clear?: string;
  selectDate?: string;
  format?: {
    date?: string;
    month?: string;
    year?: string;
  };
}

export interface DateRange {
  id: string;
  startDate: Date | null;
  endDate: Date | null;
}

export interface PreviewState {
  ranges: DateRange[];
  activeRange: DateRange | null;
  hoverRange: DateRange | null;
}

export interface CalendarTheme {
  colors?: {
    primary?: string;
    secondary?: string;
    hover?: string;
    selected?: string;
    disabled?: string;
    text?: {
      primary?: string;
      secondary?: string;
      disabled?: string;
    };
    border?: string;
  };
  sizes?: {
    cell?: {
      width?: string;
      height?: string;
    };
    fontSize?: {
      header?: string;
      weekday?: string;
      date?: string;
    };
    spacing?: {
      cell?: string;
      container?: string;
    };
    borderRadius?: {
      cell?: string;
      container?: string;
    };
  };
  animations?: {
    transition?: {
      duration?: string;
      timing?: string;
    };
    hover?: {
      scale?: string;
      shadow?: string;
    };
  };
  className?: {
    container?: string;
    header?: string;
    weekday?: string;
    date?: string;
    selected?: string;
    disabled?: string;
  };
}

export interface CalendarProps {
  value: DateRange[];
  onChange: (ranges: DateRange[]) => void;
  maxDays?: number;
  onRemoveRange?: (id: string) => void;
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[];
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  locale?: string;
  theme?: CalendarTheme;
  localization?: CalendarLocalization;
  showWeekNumbers?: boolean;
  monthsToShow?: 1 | 2;
  allowPastDates?: boolean;
  formatDate?: (date: Date) => string;
  className?: string;
  shortcuts?: Array<{
    label: string;
    getValue: () => DateRange;
  }>;
}