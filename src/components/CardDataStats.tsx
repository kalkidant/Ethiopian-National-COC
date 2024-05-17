import React, { ReactNode } from 'react';



const CardDataStats  = ({name,value}:any) => {
  return (
    
 

          <div>
          <div className="font-poppins text-50.18 text-gray-700  leading-48.27 text-left">
      <p className="text-gray-700 font-bold"><b>{value}</b></p>
    </div>
          <span className="text-sm font-medium bold"><b>{name}</b></span>
        </div>
     
  );
};

export default CardDataStats;
