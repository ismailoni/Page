import React from 'react';
import { Tag } from '../about/tag';

interface TimelineEvent {
  year: number;
  quarters: { label: string; isActive: boolean }[];
}

const timelineData: TimelineEvent[] = [
  {
    year: 2023,
    quarters: [
      { label: 'Q3', isActive: false },
      { label: 'Q4', isActive: false },
    ],
  },
  {
    year: 2024,
    quarters: [
      { label: 'Q1', isActive: false },
      { label: 'Q2', isActive: false },
      { label: 'Q3', isActive: true },
      { label: 'Q4', isActive: false },
    ],
  },
  {
    year: 2025,
    quarters: [
      { label: 'Q1', isActive: false },
      { label: 'Q2', isActive: false },
      { label: 'Q3', isActive: false },
      { label: 'Q4', isActive: false },
    ],
  },
];

const Timeline: React.FC = () => {
  return (
    <div className="relative flex items-center">
      {timelineData.map((event, index) => (
        <div key={index} className="flex items-center">
          <div className="flex flex-col items-center">
            <span className="text-black">{event.year}</span>
            <div className="flex">
              {event.quarters.map((quarter, qIndex) => (
                <div
                  key={qIndex}
                  className={`flex flex-col items-center mx-2 relative ${quarter.isActive ? 'text-green-500' : 'text-white'}`}
                >
                  <span>{quarter.label}</span>
                  {quarter.isActive && (
                    // <div className="absolute -bottom-8 w-16 bg-green-500 text-white text-center rounded-full">
                        <Tag tag="Active" color="green" />
                    // </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* {index < timelineData.length - 1 &&  */}
          <div className="w-12 h-px bg-green-400 mx-2"></div>
          {/* } */}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
