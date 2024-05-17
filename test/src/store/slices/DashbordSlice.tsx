// dashboardSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import axiosInstance from '../api';

export interface DataItem {
  id: string;
  name: string;
}

interface DataState {
  items: DataItem[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export const fetchData = createAsyncThunk('coc/get-all', async () => {
    const response = await axiosInstance.get<DataItem[]>(process.env.REACT_APP_API_URL!);
    return response.data;
  });
const initialState: DataState = {
  items: [],
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
      });
  },
});

export default dashboardSlice.reducer;