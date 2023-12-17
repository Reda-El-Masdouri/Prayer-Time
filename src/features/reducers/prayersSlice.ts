import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
  prayers: {},
}

export  interface Localisation {
    country: string,
    city: string
}

export const fetchAsyncPrayers = createAsyncThunk('shows/fetchAsyncPrayers', async (data: Localisation) => {
    const {country, city} = data;
    const response = await axios.get(`http://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=8`);    
    return response.data;
});

export const prayersSlice = createSlice({
  name: 'prayers',
  initialState,
  reducers: {
    addPrayers: (state, { payload })=>{
        state.prayers = payload;
    }
  },
  extraReducers: {
    [fetchAsyncPrayers.pending]: () => console.log('Pending'),
    [fetchAsyncPrayers.fulfilled]: (state, { payload }) => {
        console.log("Fetched Successfylly !");
        return { ... state, prayers: payload};
    },
    [fetchAsyncPrayers.rejected]: () => console.log("Rejected !")
  }
})

export const getPrayers = (state: any) => state.prayers.prayers;

// Action creators are generated for each case reducer function
export const { addPrayers } = prayersSlice.actions

export default prayersSlice.reducer