import React from 'react';

const ProgressBar = ({ progress, color }:any) => {
  return (
    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
      <div
        className={`h-2.5 rounded-full ${color}`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
