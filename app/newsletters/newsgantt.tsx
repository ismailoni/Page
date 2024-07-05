import React from 'react';
import GanttChart from './gantt';

export const ganttChartData = [
  {
    startDate: "2023-03-04",
    endDate: "2024-01-02",
    taskName: "Task A",
    isActive: true,
  },
  // Add other tasks as needed
];

export const NewsletterGantt: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {ganttChartData.map((task) => (
        <GanttChart key={task.startDate} {...task} />
      ))}
    </div>
  );
};

