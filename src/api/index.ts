import axios from "axios";
import { Country } from "../features/reducers/countriesSlice";

export const fetchAsyncCountries =  async () => {
    const response = await axios.get(`https://countriesnow.space/api/v0.1/countries`);    
    return response.data.data.filter((country: Country) => country.iso2 !== "EH");
};