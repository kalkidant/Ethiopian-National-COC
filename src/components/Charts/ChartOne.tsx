import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import ProgressBar from './ProgressBar';

const ChartOne: React.FC = () => {
  const [chartData] = useState({
    series: [{
      data: [400, 300, 200, 100,400, 300, 200, 100,400, 300, 200, 100]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 'auto',
        width: '100%',
        toolbar: {
          show: false
        },
        stroke: {
          curve: 'smooth', // Set the curve type to 'smooth'
          width: 7,
          colors: ['linear-gradient(314.5deg, #32A583 13.44%, rgba(50, 165, 131, 0) 104%)']
        }
      
      },
      grid: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        type: 'category',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        tickPlacement: 'on',
        labels: {
          style: {
            colors: '#333'
          }
        }
      },
      yaxis: {
        min: 0,
        max: 400,
        tickAmount: 4,
        labels: {
          formatter: (value) => value
        }
      },
      colors: ['#4CAF50'],
     
    }
  });

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
   
      <div className="mb-4 justify-between gap-4 ">
      <div className="grid grid-cols-12 gap-1">
       <div className="col-span-8 sm:col-span-8 h-full">
       <div className="flex">
        <div>
         
            <h4 className="text-xl font-semibold text-black dark:text-white">
              Profit this week
            </h4>
         
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="line"
            height="100%"
            width="180%"
          />
        </div>
       

<div className="border-r border border-[0.8px] border-[#E4E5E7] border-gray-100 h-58  mx-6"></div>

</div>
        </div>
        <div className="col-span-4 sm:col-span-4 h-full  items-center">
    <div className="items-center ml-15 ">
<p>Total COC Created </p>
<p>this month</p>

<div className="w-[203px] mt-10 h-[120px] font-['Poppins'] font-normal font-bold text-[80px] leading-[120px] text-black flex-none order-0 flex-grow-0 my-[-23px]">
  2460
 
</div>
<p><span className='text-[#36978D]'>+23%</span>since last month</p>
</div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ChartOne;