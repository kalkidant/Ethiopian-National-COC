import React from 'react';

const ChartTwo: React.FC = ({ totalCount, totalCoc }: any) => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div id="chart">
          <div className="font-family[Poppins] text-[23.49px] text-[#11263C] font-bold leading-[39.66px] text-left">
            COC by City
          </div>
          {totalCount?.map((data: any, index: any) => {
            return (
              <div
                key={index}
                className="flex items-center mt-8 flex-col sm:flex-row"
              >
                <p className="inline-block mr-2 font-family[Poppins] text-[#18385A] font-weight[600] leading-[21px] text-left mb-2 sm:mb-0">
                  {data?.city}
                </p>
                <div className="w-full sm:w-[222px] h-[10px] bg-[#98D2C1] rounded-full inline-block mb-2 sm:mb-0">
                  <div
                    className={`h-full text-center bg-[#32A583] text-xs text-white rounded-full ${
                      data?._count?.city
                        ? `w-[${data?._count?.city / totalCoc}%]`
                        : 'w-0'
                    }`}
                  ></div>
                </div>
                <p className="inline-block ml-0 sm:ml-2 font-family[Poppins] text-14 font-weight[600] leading-[21px] text-left">
                  {data?._count?.city}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChartTwo;
