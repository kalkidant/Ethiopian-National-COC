import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ChartTree: React.FC = () => {
  const [chartData] = useState({
    series: [400, 300],
    options: {
      chart: {
        type: 'pie',
        width: '143px',
        height:'143px'
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#FF6868', '#23E7AD'],
    }
  });

  return (
    <div className="col-span-12 rounded-sm border border-stroke h-64  p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="mb-4 justify-between gap-4">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Profit this week
          </h4>
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="pie"
            height={143}
          />
        </div>
     
      </div>
    </div>
  );
};

export default ChartTree;