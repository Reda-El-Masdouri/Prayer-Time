import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
  countries: {},
}

export const fetchAsyncCountries = createAsyncThunk('shows/fetchAsyncCountries', async () => {
    // const response = await axios.get(`http://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=8`);    
    // return response.data;
});

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    addCountries: (state, { payload })=>{
        state.countries = payload;
    }
  },
  extraReducers: {
    [fetchAsyncCountries.pending]: () => console.log('Pending'),
    [fetchAsyncCountries.fulfilled]: (state, { payload }) => {
        console.log("Fetched Successfylly !");
        return { ... state, countries: payload};
    },
    [fetchAsyncCountries.rejected]: () => console.log("Rejected !")
  }
})

export const getPrayers = (state: any) => state.countries.countries;

// Action creators are generated for each case reducer function
export const { addCountries } = countriesSlice.actions

export default countriesSlice.reducer