import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export interface Country {
    iso2: string,
    iso3: string
    country: string,
    cities: string[]
}

const initialeCountry: Country = {
    iso2: "",
    iso3: "",
    cities: [],
    country: ""
}

const initialState = {
  countries: [],
  cities: [],
  selectedCountry: initialeCountry,
  selectedCity: ""
}

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    addCountries: (state, { payload }) => {
        state.countries = payload;
    },
    onChangeCountry: (state, { payload }) => {
        state.selectedCountry = payload
    },
    onChangeCities: (state, { payload }) => {
        state.cities = payload
    },
    onChangeCity: (state, { payload }) => {
        state.selectedCity = payload
    },
  },
})

export const getCountries = (state: any) => state.countries.countries;

// Action creators are generated for each case reducer function
export const { addCountries, onChangeCountry, onChangeCities, onChangeCity } = countriesSlice.actions

export default countriesSlice.reducer