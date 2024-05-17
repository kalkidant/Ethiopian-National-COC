import React, { useEffect, useRef } from 'react';
import CardDataStats from '../../components/CardDataStats';
import ChartOne from '../../components/Charts/ChartOne';
import ChartTwo from '../../components/Charts/ChartTwo';
import TableOne from '../../components/Tables/TableOne';
import DefaultLayout from '../../layout/DefaultLayout';
import ChartTree from '../../components/Charts/ChartTree';
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllData, fetchData } from '../../store/slices/dashboardSlice';
import { Card } from '../../components/Charts/TotalCard';

const Dashboard: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { items, status, error,dataList } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    try {
      dispatch(fetchData());
      dispatch(fetchAllData())
    } catch (error) {
      console.log(error,"errrrr")
    }
  
  }, [dispatch]);

  return (
    <DefaultLayout>
       <div className="grid grid-cols-12 gap-8">
    <Card totalCount= {items}/>
        <div className="col-span-12 sm:col-span-4">
        <ChartTwo totalCount= {items?.totalCountByCity} totalCoc={items?.totalCoc} />
        </div>
       </div>
     


      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
      
        
      
        <div className="col-span-12 xl:col-span-8 border-none">
          <TableOne dataList={dataList} />
        </div>
        <ChartTree totalCount={items?.totalPracticalPassedAndFailed} />
      </div>
    </DefaultLayout>
  );
};

export default Dashboard;
