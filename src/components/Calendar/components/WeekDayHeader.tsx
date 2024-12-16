import React from 'react';
import { WEEK_DAYS } from '../utils/constants';

export const WeekDayHeader: React.FC = () => (
  <>
    {WEEK_DAYS.map((day) => (
      <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
        {day}
      </div>
    ))}
  </>
);