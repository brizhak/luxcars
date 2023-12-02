import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCarsList } from '../services/api';

export const requestCars = createAsyncThunk(
  'cars/requestCars',
  async (page, thunkApi) => {
    try {
      const limit = 12;
      const data = await fetchCarsList(page, limit);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    data: [],
    loading: false,
    error: null,
    page: 1,
  },
  reducers: {
    incrementPage: state => {
      state.page += 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(requestCars.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(requestCars.fulfilled, (state, action) => {
        state.loading = false;

        state.data = [...state.data, ...action.payload];
        console.log(state.data);
      })
      .addCase(requestCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { incrementPage } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
