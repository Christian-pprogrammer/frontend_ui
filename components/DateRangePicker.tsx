import { useState } from 'react';
import { DateRange, Range } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const DateRangePickerComponent: React.FC = () => {
  const [dateRange, setDateRange] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: undefined,
      key: 'selection'
    }
  ]);

  const handleSelect = (ranges: any) => {
    setDateRange([ranges.selection]);
  };

  return (
    <div className="w-full">
      <DateRange
        ranges={dateRange}
        onChange={handleSelect}
        scroll={{ enabled: true }}
        moveRangeOnFirstSelection={false}
      />
    </div>
  );
};

export default DateRangePickerComponent;
