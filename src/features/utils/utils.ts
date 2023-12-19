import { Country } from "../reducers/countriesSlice";

export const getCitiesOfCountry: (country: Country)=> string[] = (country: Country) => {
    return country.cities
}

export const getCountryByValueFromAllCountries: (countries: Country[], country: string)=> Country | undefined = (countries: Country[], country: string) => {
    return countries.find(ele => ele.country === country)
}