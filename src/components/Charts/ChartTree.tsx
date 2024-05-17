import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
interface chartProps {
  options: any;
  series: any;
}
const ChartTree: React.FC = ({ totalCount }: any) => {
  const [passed,setPassed] = useState(0)
  const [failed,setFailed] = useState(0)
  const [chartData, setchartData] = useState({
    series: [],
    options: {
      chart: {
        type: 'pie',
        width: '143px',
        height: '143px',
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#FF6868', '#23E7AD'],
    },
  });

  useEffect(() => {
    const practicalResultSeries = totalCount?.map(
      (item: any) => item._count.practical_result
    );
    const practicalResultName = totalCount?.map(
      (item: any) => item.practical_result
    );
    setchartData({
      series: practicalResultSeries,
      options: {
        legend: {
          show: false
       },
       tooltips: {
          enabled: false
       },
        chart: {
          type: 'pie',
          width: '143px',
          height: '143px'
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#FF6868', '#23E7AD'],
       
      }
    });
  }, [totalCount]);


  const calculatePercentages = () => {
    if (!chartData || !chartData.series || chartData.series.length < 2) {
      return {
        passedPercentage: '0.00',
        failedPercentage: '0.00'
      };
    }
  
    const total = (chartData.series[0] || 0) + (chartData.series[1] || 0);
    let passedPercentage = 0;
    let failedPercentage = 0;
  
    if (total > 0) {
      passedPercentage = (chartData.series[0] / total) * 100;
      failedPercentage = (chartData.series[1] / total) * 100;
    }
  
    return {
      passedPercentage: passedPercentage.toFixed(2),
      failedPercentage: failedPercentage.toFixed(2)
    };
  };
  


  return (
    <div className="col-span-12 rounded-sm border border-stroke h-64 p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4 relative">
    <div className="mb-4 justify-between gap-4">
      <div>
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Competency
        </h4>
        <ReactApexChart options={chartData?.options} series={chartData?.series} type="pie" height={143} />
      </div>
    </div>
  
    <div className="absolute  bg-[#F0FEFF] rounded-md mt-3 w-80 h-15 flex  shadow-lg dark:bg-boxdark">
    <div className="flex items-center ml-4">
      <div className="w-3 h-3 bg-[#FF6868] rounded-full mr-3"></div>
      <div>
        <h5 className="text-sm font-semibold text-black dark:text-white">
          Total Failed
        </h5>
        <p className="text-xs text-gray-500 dark:text-gray-400">{calculatePercentages()?.passedPercentage}</p>
      </div>
    </div>
    <div className="flex items-center ml-8">
      <div className="w-3 h-3 bg-[#23E7AD] rounded-full mr-3"></div>
      <div>
        <h5 className="text-sm font-semibold text-black dark:text-white">
          Total Passed
        </h5>
        <p className="text-xs text-gray-500 dark:text-gray-400">{calculatePercentages()?.failedPercentage}</p>
      </div>
    </div>
  </div>
  </div>
  );
};

export default ChartTree;
