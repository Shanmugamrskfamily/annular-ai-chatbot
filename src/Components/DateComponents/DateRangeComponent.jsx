import React, { useState } from 'react';
import { toast } from 'react-toastify';

function DateRangeComponent(props) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    // Reset end date if it's before the new start date
    if (endDate < e.target.value) {
      setEndDate('');
    }
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleGoClick = () => {
    if (startDate && endDate) {
      props.result({ startDate, endDate });
    } else {
      toast.error('Please select both start and end dates.');
    }
  };

  return (
    <div className="gap-1">
        <span className='mr-2'>Filter By</span>
      <label htmlFor="start-date" className="m-1">
        Start Date:
      </label>
      <input
        type="date"
        id="start-date"
        value={startDate}
        onChange={handleStartDateChange}
        className="border border-gray-300 rounded px-2 py-1"
      />
      <label htmlFor="end-date" className="m-1">
        End Date:
      </label>
      <input
        type="date"
        id="end-date"
        value={endDate}
        onChange={handleEndDateChange}
        min={startDate} 
        className="border border-gray-300 rounded px-2 py-1"
      />
      <button onClick={handleGoClick} className="bg-blue-500 text-white px-4 py-2 rounded ml-1">
        Go
      </button>
    </div>
  );
}

export default DateRangeComponent;
