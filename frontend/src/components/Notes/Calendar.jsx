import React, { useState, useEffect, useContext } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { NoteContext } from '../../context/useNoteContent';

const Calendar = () => {
  const today = new Date();

  const { selectedDate, updateSelectedDate } = useContext(NoteContext);

  const [currentMonth, setCurrentMonth] = useState(
    new Date(today.getFullYear(), today.getMonth())
  );

 

  const handleDateClick = (day) => {
    const newDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    updateSelectedDate(newDate);
  };


  const handleMonthChange = (direction) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(currentMonth.getMonth() + direction);
    if (newMonth <= today && newMonth >= new Date(2024, 9)) {
      setCurrentMonth(newMonth);
    }
  };

 
  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();
  const weekdays = ["M", "T", "W", "T", "F", "S", "S"];
  return (
    <div className="p-4 bg-lGreen-500 rounded-2xl max-w-xs">
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-semibold text-lWhite">
          {currentMonth.toLocaleString("default", { month: "long" })}{" "}
          {currentMonth.getFullYear()}
        </span>
        <div className="flex space-x-2">
          <button
            onClick={() => handleMonthChange(-1)}
            className="p-2 rounded-full border border-lWhite flex items-center justify-center"
            disabled={currentMonth <= new Date(2024, 9)}
          >
            <FaChevronLeft className="text-lWhite" />
          </button>
          <button
            onClick={() => handleMonthChange(1)}
            className="p-2 rounded-full border border-lWhite flex items-center justify-center"
            disabled={currentMonth >= today}
          >
            <FaChevronRight className="text-lWhite" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium">
        {weekdays.map((day, index) => (
          <div key={index} className="text-gray-700">
            {day}
          </div>
        ))}
        {Array(firstDayOfMonth)
          .fill(null)
          .map((_, index) => (
            <div key={index}></div> // Empty spaces for days of the week
          ))}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
          <button
            key={day}
            onClick={() => handleDateClick(day)}
            className={`px-3 py-2 rounded-full flex items-center justify-center ${selectedDate?.getDate() === day &&
                currentMonth.getMonth() === selectedDate?.getMonth() &&
                currentMonth.getFullYear() === selectedDate?.getFullYear()
                ? "bg-yellow-400 text-lBackground"
                : (firstDayOfMonth + day - 1) % 7 === 5 ||
                  (firstDayOfMonth + day - 1) % 7 === 6
                  ? "bg-lWhite text-lBackground"
                  : "bg-lBackground text-lWbg-lWhite"
              }`}
          >
            {day}
          </button>
        ))}
      </div>
     
    </div>
  );
};


export default Calendar;
