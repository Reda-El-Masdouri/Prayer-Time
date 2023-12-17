import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
  cities: {},
}

export const fetchAsyncCities = createAsyncThunk('shows/fetchAsyncCities', async () => {
    // const response = await axios.get(`http://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=8`);    
    // return response.data;
});

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    addCities: (state, { payload })=>{
        state.cities = payload;
    }
  },
  extraReducers: {
    [fetchAsyncCities.pending]: () => console.log('Pending'),
    [fetchAsyncCities.fulfilled]: (state, { payload }) => {
        console.log("Fetched Successfylly !");
        return { ... state, cities: payload};
    },
    [fetchAsyncCities.rejected]: () => console.log("Rejected !")
  }
})

export const getCities = (state: any) => state.cities.cities;

// Action creators are generated for each case reducer function
export const { addCities } = citiesSlice.actions

export default citiesSlice.reducer