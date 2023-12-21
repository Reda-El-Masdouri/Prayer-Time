import PrayerCardProps from "../../components/PrayerCard/PrayerCardProps";
import { Country } from "../reducers/countriesSlice";
import { Prayer } from "../reducers/prayersSlice";

const images = [
    require("../../../public/images/fajr-prayer.png"),
    require("../../../public/images/dhhr-prayer-mosque.png"),
    require("../../../public/images/asr-prayer-mosque.png"),
    require("../../../public/images/sunset-prayer-mosque.png"),
    require("../../../public/images/night-prayer-mosque.png")
];

export const getCitiesOfCountry: (country: Country)=> string[] = (country: Country) => {
    return country.cities
}

export const getCountryByValueFromAllCountries: (countries: Country[], country: string)=> Country | undefined = (countries: Country[], country: string) => {
    return countries.find(ele => ele.country === country)
}

export const constructPrayersArray: (prayer: Prayer) => PrayerCardProps[] = (prayer: Prayer) => {
    let result: PrayerCardProps[] = []
    images.map((image, index) => {
        result.push({
            image: image,
            prayerName: Object.keys(prayer)[index],
            time: Object.values(prayer)[index]
        })
    })
    return result;
}