import { render, fireEvent, screen } from '@testing-library/react';
import { Calendar } from '../Calendar';
import { DateRange } from '../types';
import { vi } from 'vitest';

describe('Calendar', () => {
  const mockOnChange = vi.fn();
  const defaultProps = {
    value: [] as DateRange[],
    onChange: mockOnChange,
    maxDays: 7,
  };

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('renders without crashing', () => {
    render(<Calendar {...defaultProps} />);
    expect(screen.getByText(/Sun/i)).toBeInTheDocument();
  });

  it('handles date selection', () => {
    render(<Calendar {...defaultProps} />);
    const dateButton = screen.getByText('15');
    fireEvent.click(dateButton);
    expect(mockOnChange).toHaveBeenCalled();
  });

  it('respects maxDays limit', () => {
    const value = [{
      id: '1',
      startDate: new Date(2024, 0, 1),
      endDate: new Date(2024, 0, 5),
    }];
    
    render(<Calendar {...defaultProps} value={value} maxDays={7} />);
    
    // Try to select dates that would exceed maxDays
    const dateButton = screen.getByText('10');
    fireEvent.click(dateButton);
    
    // The onChange should not be called as it would exceed maxDays
    expect(mockOnChange).not.toHaveBeenCalled();
  });

  it('disables past dates', () => {
    render(<Calendar {...defaultProps} />);
    const pastDate = screen.getByText('1');
    expect(pastDate).toHaveAttribute('disabled');
  });
});