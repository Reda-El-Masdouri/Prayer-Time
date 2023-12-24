import { createSlice } from '@reduxjs/toolkit'

export interface Country {
    iso2: string,
    iso3: string
    country: string,
    cities: string[]
}

const initialeCountry: Country = {
    iso2: "SA",
    iso3: "SAU",
    cities: [
        "Abha",
        "Abqaiq",
        "Al Bahah",
        "Al Faruq",
        "Al Hufuf",
        "Al Qatif",
        "Al Yamamah",
        "At Tuwal",
        "Buraidah",
        "Dammam",
        "Dhahran",
        "Hayil",
        "Jazirah",
        "Jeddah",
        "Jizan",
        "Jubail",
        "Khamis Mushait",
        "Khobar",
        "Khulays",
        "Linah",
        "Madinat Yanbu` as Sina`iyah",
        "Mecca",
        "Medina",
        "Mina",
        "Najran",
        "Rabigh",
        "Rahimah",
        "Rahman",
        "Ramdah",
        "Ras Tanura",
        "Riyadh",
        "Sabya",
        "Safwa",
        "Sakaka",
        "Sambah",
        "Sayhat",
        "Tabuk",
        "Yanbu` al Bahr"
      ],
    country: "Saudi Arabia"
}

const initialState = {
  countries: [],
  cities: [],
  selectedCountry: initialeCountry,
  selectedCity: "Mecca"
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