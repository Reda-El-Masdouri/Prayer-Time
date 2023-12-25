import axios from "axios";
import moment from 'moment';
import { Country } from "../features/reducers/countriesSlice";

export const fetchAsyncCountries =  async () => {
    const response = await axios.get(`https://countriesnow.space/api/v0.1/countries`);    
    return response.data.data.filter((country: Country) => !["EH", "IL"].includes(country.iso2));
};

export const fetchAsyncPrayersTimesOfCity = async (country:string, city: string) => {
    const date: string = moment(Date.now()).format("DD-MM-YYYY")
    const response = await axios.get(`http://api.aladhan.com/v1/timingsByCity/${date}?city=${city}&country=${country}&method=8`);    
    return response.data.data.timings;
}