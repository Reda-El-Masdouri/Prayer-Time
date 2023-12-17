import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"


export interface Country {
    iso2: string,
    iso3: string
    country: string,
    cities: string[]
}

const initialState = {
  countries: [],
}

export const fetchAsyncCountries = createAsyncThunk('counries/fetchAsyncCountries', async () => {
    const response = await axios.get(`https://countriesnow.space/api/v0.1/countries`);    
    return response.data.filter((country: Country) => country.iso2 !== "EH");
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

export const getCountries = (state: any) => state.countries.countries;

// Action creators are generated for each case reducer function
export const { addCountries } = countriesSlice.actions

export default countriesSlice.reducer