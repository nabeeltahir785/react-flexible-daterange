import React from 'react';

interface TooltipProps {
  content: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ content }) => (
  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
    {content}
    <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1 border-4 border-transparent border-t-gray-800" />
  </div>
);