import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
 interface chartProps{
  options:any,
  series:any
}
const ChartTree: React.FC = ({totalCount}:any) => {
  const [chartData,setchartData] = useState({
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
  })

  useEffect(()=>{
    const practicalResultSeries = totalCount?.map((item:any) => (
      item._count.practical_result
    ));
    const practicalResultName = totalCount?.map((item:any) => (
      item.practical_result
    ));
    setchartData(  {
      series: practicalResultSeries,
      options: {
        labels: practicalResultName,
        chart: {
          type: 'pie',
          width: '143px',
          height:'143px',
        },
        dataLabels: {
          enabled: false,
        },
        colors: ['#FF6868', '#23E7AD'],
      }
    })
  },[totalCount])

  return (
    <div className="col-span-12 rounded-sm border border-stroke h-64  p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="mb-4 justify-between gap-4">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Profit this week
          </h4>
          <ReactApexChart
            options={chartData?.options}
            series={chartData?.series}
            type="pie"
            height={143}
          />
        </div>
     
      </div>
    </div>
  );
};

export default ChartTree;