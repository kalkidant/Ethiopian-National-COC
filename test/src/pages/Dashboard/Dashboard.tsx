import React, { useEffect, useRef } from 'react';
import CardDataStats from '../../components/CardDataStats';
import ChartOne from '../../components/Charts/ChartOne';
import ChartTwo from '../../components/Charts/ChartTwo';
import TableOne from '../../components/Tables/TableOne';
import DefaultLayout from '../../layout/DefaultLayout';
import ChartTree from '../../components/Charts/ChartTree';
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../store/slices/dashbordSlice';

const Dashboard: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { items, status, error } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  console.log(items,"itemsss")
  return (
    <DefaultLayout>
       <div className="grid grid-cols-12 gap-8">
       <div className="col-span-8 sm:col-span-8 h-full">
  <div className="grid grid-cols-12 gap-2 h-full">
    <div className="col-span-3 sm:col-span-3 rounded-sm border border-stroke bg-white py-6 px-4 shadow-default dark:border-strokedark dark:bg-boxdark">
<CardDataStats/>
    </div>
    <div className="col-span-3 sm:col-span-3 rounded-sm border border-stroke bg-white py-6 px-4 shadow-default dark:border-strokedark dark:bg-boxdark">
   
   </div>
   <div className="col-span-3 sm:col-span-3 rounded-sm border border-stroke bg-white py-6 px-4 shadow-default dark:border-strokedark dark:bg-boxdark">
   
   </div>
   <div className="col-span-3 sm:col-span-3 rounded-sm border border-stroke bg-white py-6 px-4 shadow-default dark:border-strokedark dark:bg-boxdark">
   
   </div>
   
   
    {/* Rest of the grid items */}
    <div className="col-span-12 sm:col-span-12 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <ChartOne />
    </div>
  </div>
 
</div>
        <div className="col-span-4 sm:col-span-4">
        <ChartTwo />
        </div>
       </div>
     


      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
      
        
      
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChartTree />
      </div>
    </DefaultLayout>
  );
};

export default Dashboard;
