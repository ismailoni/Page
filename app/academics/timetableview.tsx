import Image from 'next/image';
// import timetableImage from '/';
import React from 'react';

export const TimetableView = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const times = ['9:00 - 9:30 AM', '9:30 - 10:00 AM', '10:00 - 10:30 AM', '10:30 - 11:00 AM', '11:00 - 11:30 AM'];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-800 to-teal-600">
      <div className="relative bg-white bg-opacity-10 p-8 rounded-xl shadow-xl">
        {/* <Image src={timetableImage} alt="Tutorial Timetable" className="absolute inset-0 w-full h-full object-cover opacity-20 rounded-xl" /> */}
        <div className="relative z-10">
          <div className="grid grid-cols-6 gap-4">
            <div></div>
            {times.map((time, index) => (
              <div key={index} className="text-white text-center font-semibold">{time}</div>
            ))}
            {days.map((day, dayIndex) => (
              <React.Fragment key={dayIndex}>
                <div className="text-white text-center font-semibold">{day}</div>
                {times.map((_, timeIndex) => (
                  <div key={timeIndex} className="text-white text-center p-4 border border-gray-300">
                    CEG 323
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


