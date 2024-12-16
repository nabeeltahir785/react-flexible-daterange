import React, { useState } from 'react';
import { Calendar } from './components/Calendar/Calendar';
import { X } from 'lucide-react';
import type { DateRange } from './components/Calendar/types';

function App() {
  const [dateRanges, setDateRanges] = useState<DateRange[]>([]);

  const handleRemoveRange = (id: string) => {
    setDateRanges(ranges => ranges.filter(range => range.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6">Date Range Selector</h1>
        <Calendar 
          value={dateRanges} 
          onChange={setDateRanges} 
          maxDays={7} 
          onRemoveRange={handleRemoveRange}
        />
      </div>
    </div>
  );
}

export default App;