import axios from "axios";
import { Country } from "../features/reducers/countriesSlice";

export const fetchAsyncCountries =  async () => {
    const response = await axios.get(`https://countriesnow.space/api/v0.1/countries`);    
    return response.data.data.filter((country: Country) => country.iso2 !== "EH");
};

export const fetchAsyncPrayersTimesOfCity = async (country:string, city: string) => {    
    const response = await axios.get(`http://api.aladhan.com/v1/timingsByCity/18-12-2023?city=${city}&country=${country}&method=8`);    
    return response.data.data.timings;
}