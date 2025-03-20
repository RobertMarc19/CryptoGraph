import React from "react";

const TimeSelector = ({ selectedTime, setSelectedTime }) => {
  const timeOptions = [
    { label: "24h", value: "1" },
    { label: "7d", value: "7" },
    { label: "30d", value: "30" },
  ];

  return (
    <select
      className="text-sm p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white shadow-sm"
      value={selectedTime}
      onChange={(e) => setSelectedTime(e.target.value)}
    >
      {timeOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default TimeSelector;
