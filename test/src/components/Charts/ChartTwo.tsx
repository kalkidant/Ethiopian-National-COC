import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import ProgressBar from './ProgressBar';

const ChartTwo: React.FC = () => {
  const [chartData] = useState({
    series: [{
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      grid: {
        show: false, // Set the show property to false to remove the horizontal line
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: 'end',
          horizontal: true,
          dataLabels: {
            position: 'end'
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
          'United States', 'China', 'Germany'
        ]
      },
      colors: ['#4CAF50'] // Set color to green
    }
  });

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div id="chart">
          <div>
            <h4 className="text-xl font-semibold text-black dark:text-white">
              Profit this week
            </h4>
          </div>
          <div className="flex items-center">
  <p className="inline-block mr-2 font-family[Poppins] text-[#18385A] font-weight[600] leading-[21px] text-left">Addis Abeba</p>
  <div className="w-[222px] h-[10px] bg-[#98D2C1] rounded-full inline-block">
    <div className="w-3/4 h-full text-center bg-[#32A583] text-xs text-white rounded-full">
    </div>
  </div>
  <p className="inline-block ml-2 font-family[Poppins] text-14 font-weight[600] leading-[21px] text-left">25</p>
</div>
   
        </div>
      </div>
    </div>
  );
};

export default ChartTwo;