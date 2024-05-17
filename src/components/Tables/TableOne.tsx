import React, { useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './Table.css'

const TableOne = ({dataList}:any) => {
  const gridRef = useRef<AgGridReact>(null);
  const columns= [
    {
      headerName: "N.O",
      field: "no",
      width: 70,
      valueGetter: (params: any) => {
        return params.node.rowIndex + 1;
      }
    },
    {
      headerName: "Name",
      field: "first_name",
      width: 200,
      headerHeight: 40,
      rowHeight: 40,
      cellRenderer: (params) => {
        return (
          <div className="flex items-center">
            <img
              src="https://i.pinimg.com/736x/38/93/07/389307d6af5c4be0051b7d3c4f93bf3d.jpg"
              className="w-8 h-8 rounded-full object-cover mr-2"
              alt="Name Icon"
            />
            <span>{params.data.first_name}</span>
          </div>
        );
      },
    },
    {headerName: "Assessed", field: "assessed", width: 120,headerHeight: 40,
    rowHeight: 40,},
    {headerName: "Reg.No", field: "reg_no", width: 160,headerHeight: 40,
    rowHeight: 40,},
    {headerName: "Location", field: "location", width: 120,headerHeight: 40,
    rowHeight: 40,},
    {
      headerName: "Action",
      field: "",
      width: 120,
      headerHeight: 40,
      rowHeight: 40,
      cellRenderer: (params: any) => {
        return <button
        type="button"
        className="inline-flex items-center rounded   bg-[#F0F7F7] px-4 pb-1 pt-1 text-sm text-[#4F5E74] font-small uppercase leading-normal"
       
      >
       <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_479)">
<rect y="0.951691" width="12" height="12" rx="1.33333" fill="white"/>
<path d="M3.36688 7.11912C3.36688 7.11912 4.26235 5.35986 5.82985 5.35986C7.39699 5.35986 8.29281 7.11912 8.29281 7.11912C8.29281 7.11912 7.39699 8.87838 5.82985 8.87838C4.26235 8.87838 3.36688 7.11912 3.36688 7.11912Z" stroke="#4F5E74" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.99709 8.87766V9.58137C8.99709 9.768 8.92295 9.94699 8.79098 10.079C8.65901 10.2109 8.48002 10.2851 8.29339 10.2851H3.36746C3.18083 10.2851 3.00184 10.2109 2.86987 10.079C2.7379 9.94699 2.66376 9.768 2.66376 9.58137V8.87766M8.99709 5.35914V4.65544C8.99709 4.46881 8.92295 4.28982 8.79098 4.15785C8.65901 4.02588 8.48002 3.95174 8.29339 3.95174H3.36746C3.18083 3.95174 3.00184 4.02588 2.86987 4.15785C2.7379 4.28982 2.66376 4.46881 2.66376 4.65544V5.35914M5.83042 7.47025C5.92374 7.47025 6.01324 7.43318 6.07922 7.3672C6.14521 7.30121 6.18228 7.21172 6.18228 7.1184C6.18228 7.02509 6.14521 6.93559 6.07922 6.86961C6.01324 6.80362 5.92374 6.76655 5.83042 6.76655C5.73711 6.76655 5.64761 6.80362 5.58163 6.86961C5.51564 6.93559 5.47857 7.02509 5.47857 7.1184C5.47857 7.21172 5.51564 7.30121 5.58163 7.3672C5.64761 7.43318 5.73711 7.47025 5.83042 7.47025Z" stroke="#4F5E74" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<rect x="0.333333" y="1.28502" width="11.3333" height="11.3333" rx="1" stroke="#4F5E74" stroke-width="0.666667"/>
<defs>
<clipPath id="clip0_1_479">
<rect y="0.951691" width="12" height="12" rx="1.33333" fill="white"/>
</clipPath>
</defs>
</svg>

        View
      </button>
        
      }
    }
  ]

  return (
    <AgGridReact
      ref={gridRef}
      suppressRowClickSelection={true}
      pagination={true}
      paginationAutoPageSize={true}
      rowData={dataList?.data}
      columnDefs={columns}
      className="ag-theme-alpine max-w-full border-none bg-transparent font-poppins"
      rowStyle={{
        fontFamily: 'Poppins, sans-serif',
      }}
    />
  );
};

export default TableOne;