import { createSlice } from '@reduxjs/toolkit'
import PrayerCardProps from '../../components/PrayerCard/PrayerCardProps'

export interface Prayer {
  Fajr: string,
  Dhuhr: string,
  Asr: string,
  Maghrib: string,
  Isha: string
}
export  interface Localisation {
  country: string,
  city: string
}

const initialState = {
  prayers: []
}

export const prayersSlice = createSlice({
  name: 'prayers',
  initialState,
  reducers: {
    addPrayers: (state, action)=>{
      console.log("payload", action);
        state.prayers = action.payload;
    }
  },
})

export const getPrayers = (state: any) => state.prayers.prayers;

// Action creators are generated for each case reducer function
export const { addPrayers } = prayersSlice.actions

export default prayersSlice.reducer