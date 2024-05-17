// dashboardSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import  { config } from '../api';
export interface DataItem {
  totalCoc: number;
  totalCompleted: number;
  totalRegular: number;
  totalDistance: number;
  totalPracticalPassed: number;
  totalCountByCity: {
    _count: {
      city: number;
    };
    city: string;
  }[];
  totalCocThisMonth: number;
  totalCocByMonth: {
    _count: {
      month: number;
    };
    month: string;
  }[];
  totalPracticalPassedAndFailed: {
    _count: {
      practical_result: number;
    };
    practical_result: string;
  }[];
}

interface DataState {
  items: DataItem[];
  dataList:any[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export const fetchData = createAsyncThunk('coc/getDashboard', async (_, { rejectWithValue }) => {
  try {

    const response = await axios.get(`https://national-coc-api.lmis.gov.et/coc/data`, config);
    return response.data;
  } catch (error) {
    // Reject the promise with the error message
    return rejectWithValue("error.message");
  }
});
export const fetchAllData = createAsyncThunk('coc/getAllData', async (_, { rejectWithValue }) => {
  try {

    const response = await axios.get('https://national-coc-api.lmis.gov.et/coc/get-all', config);
    return response.data;
  } catch (error) {
    return rejectWithValue("error.message");
  }
});
const initialState: DataState = {
  items: [],
  dataList:[],
  status: 'idle',
  error: null,
};

const dashboardSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      })
      .addCase(fetchAllData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.dataList = action.payload;
        console.log(action)
      })
      .addCase(fetchAllData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default dashboardSlice.reducer;