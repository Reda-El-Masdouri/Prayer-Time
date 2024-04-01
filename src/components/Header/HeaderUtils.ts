import { Moment } from "moment";
import moment from 'moment'
import PrayerCardProps from "../PrayerCard/PrayerCardProps";
moment.locale('fr')

export const getRemainingTime = (prayer: PrayerCardProps | undefined, tempMoment: Moment) => {
    if(prayer === undefined) return 0
    if(prayer.prayerName !== "Fajr"){
        return moment(prayer?.time, 'hh:mm').diff(tempMoment);
    }
    const midnightDiff = moment("23:59:59", "hh:mm:ss").diff(tempMoment)
    const fajrToMidnightDiff = moment(prayer.time, "hh:mm").diff(moment("00:00:01", "hh:mm:ss"))
    return midnightDiff + fajrToMidnightDiff
}

export const withTowDigits = (num: number) => {
    return num.toLocaleString().length === 1 ? `0${num}` : num
}

export const getNeedTime = (hours: number, minutes: number, seconds: number) => {
    return `${withTowDigits(hours)} : ${withTowDigits(minutes)} : ${withTowDigits(seconds)}`
}