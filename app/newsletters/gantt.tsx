import React from 'react';

interface GanttChartProps {
  startDate: string;
  endDate: string;
  taskName?: string;
  isActive?: boolean;
}

const GanttChart: React.FC<GanttChartProps> = ({ startDate, endDate, taskName = "", isActive = false }) => {
  // Calculate the task duration in months
  const start = new Date(startDate);
  const end = new Date(endDate);
  const taskDuration = Math.ceil((end.getTime() - start.getTime()) / (1000 * 3600 * 24 * 30));
  const chartWidth = taskDuration * 30; // 30px per month

  const getMonthLabels = () => {
    const labels = [];
    const currentDate = new Date(startDate);

    for (let i = 0; i <= taskDuration; i++) {
      labels.push(
        <div key={`monthLabel-${i}`} className="mr-2">
          {currentDate.toLocaleDateString("en-US", { month: "short" })}
        </div>
      );
      currentDate.setMonth(currentDate.getMonth() + 1);
    }

    return labels;
  };

  return (
    <div className="flex flex-col space-y-2 relative">
      <div className="flex flex-wrap text-xs">
        {getMonthLabels()}
      </div>
      <div className="relative w-full">
        <div
          className="h-2 bg-gray-200 rounded-full absolute top-1/2 -translate-y-1/2"
          style={{ width: `${chartWidth}px` }}
        >
          {isActive && <div className="h-full w-2 bg-green-500 absolute left-1/2 -translate-x-1/2"></div>}
        </div>
      </div>
      {taskName && <div className="text-sm font-bold mt-2">{taskName}</div>}
    </div>
  );
};

export default GanttChart;
