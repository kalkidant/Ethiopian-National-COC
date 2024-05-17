import { ApexOptions } from 'apexcharts';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
const initialChartData = {
  series: [
    {
      data: [],
    },
  ],
  options: {
    xaxis: {
      type: 'category',
      categories: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      tickPlacement: 'off',
      labels: {
        style: {
          colors: '#333',
        },
      },
    },
  },
};
const ChartOne: React.FC = ({ totalCount }: any) => {
  const [chartData, setChartData] = useState(initialChartData);

  useEffect(() => {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const filteredData = monthNames?.map((month) => {
      const matchingItem = totalCount?.totalCocByMonth?.find(
        (item) => item.month === month,
      );
      return {
        _count: {
          month: matchingItem ? matchingItem._count.month : 0,
        },
        month: month,
      };
    });

    console.log(filteredData);
    setChartData({
      series: [
        {
          name: 'Total COC',
          data: filteredData.map((item) => item._count.month),
        },
      ],
      options: {
        chart: {
          height: 300,
          type: 'line',
          toolbar: {
            show: false,
          },
        },
        forecastDataPoints: {
          count: 0,
        },
        stroke: {
          width: 5,
          curve: 'smooth',
        },
        grid: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          type: 'category',
          categories: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
          tickPlacement: 'off',
          labels: {
            style: {
              colors: '#333',
            },
          },
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            gradientToColors: ['#98D2C1', 'rgb(167 211 198)'],
            shadeIntensity: 1,
            type: 'horizontal',
            opacityFrom: 1,
            opacityTo: 1,
          },
        },
      },
    });
  }, [totalCount]);

  const percentage = () => {
    if (!totalCount || !totalCount.totalCocThisMonth || !totalCount.totalCocByMonth || totalCount.totalCocByMonth.length === 0 || !totalCount.totalCocByMonth[0]._count || !totalCount.totalCocByMonth[0]._count.month) {
      return 0; // or handle the case in another appropriate way
    }
  
    const currentMonthCount = totalCount.totalCocThisMonth;
    const previousMonthCount = totalCount.totalCocByMonth[0]._count.month;
  
    if (previousMonthCount === 0) {
      return 0; // Avoid division by zero
    }
  
    const incrementPercentage = ((currentMonthCount - previousMonthCount) / previousMonthCount) * 100;
    return incrementPercentage;
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="mb-4 justify-between gap-4 ">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 sm:col-span-8 h-full">
            <div className="">
              <div>
                <h4 className="text-xl font-semibold text-black dark:text-white">
                  COC Graph
                </h4>
                <ReactApexChart
                  options={chartData.options}
                  series={chartData.series}
                  type="line"
                  height={300}
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-4 h-full  ">
            <div className="  ml-10  ">
              <p>Total COC Created </p>
              <p>this month</p>
              <div
                className="
                w-[203px] h-[120px] mt-30
                font-['Poppins'] font-bold text-[80px] leading-[120px] text-black
                flex-none order-0 flex-grow-0 my-[-23px]
                md:w-[150px] md:h-[90px] md:text-[60px] md:leading-[90px]
                sm:w-[100px] sm:h-[60px] sm:text-[40px] sm:leading-[60px]
              "
              >
                {totalCount?.totalCocThisMonth}
              </div>
              <p>
                <span className="text-[#36978D]">+ {percentage()== undefined? 0:percentage()} %</span>since last month
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
