import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import TowTitles from '../TowTitles/TowTitles'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { Box, CircularProgress } from '@mui/material'
import './Header.scss'
import { capitalizeString, getNextPrayer } from '../../features/utils/utils'
import PrayerCardProps from '../PrayerCard/PrayerCardProps'
import { getNeedTime, getRemainingTime, withTowDigits } from './HeaderUtils'

export default function Header() {
  const countriesSatate = useSelector((state) => state.countries)
  const prayersState = useSelector((state) => state.prayers)
  const [nextPrayer, setNextPrayer] = useState<PrayerCardProps>()
  const [needTime, setNeedTime] = useState('')
  moment.locale('fr')

  const nextPrayerMsg: string =
    'Prochaine prière de ' + nextPrayer?.prayerName + ' dans'
  const [date, setDate] = useState(
    capitalizeString(moment().format('dddd DD MMMM YYYY | HH : mm : ss'))
  )

  useEffect(() => {
    getNextPrayer(prayersState.prayers)
      .then((reponse) => {
        setNextPrayer({ ...reponse })
      })
      .catch(() => {
        throw new Error(`Je n'arrive pas à récupérer la prochaine prière !`)
      })
    const interval = setInterval(() => {
      setDate(
        capitalizeString(moment().format('dddd DD MMMM YYYY | HH : mm : ss'))
      )
    }, 1000)
    return () => clearInterval(interval)
  }, [date, prayersState])

  useEffect(() => {
    const momentNow = moment()
    const remainingTime = getRemainingTime(nextPrayer, momentNow)
    const duration = moment.duration(remainingTime)
    setNeedTime(
      getNeedTime(duration.hours(), duration.minutes(), duration.seconds())
    )
  }, [date, nextPrayer, prayersState])

  return (
    <>
      <Grid container>
        <Grid xs={6}>
          <TowTitles titleH2={date} titleH1={countriesSatate.selectedCity} />
        </Grid>
        <Grid xs={6}>
          {!nextPrayer ? (
            <Box className="box-loader">
              <CircularProgress />
            </Box>
          ) : (
            <TowTitles titleH2={nextPrayerMsg} titleH1={needTime} />
          )}
        </Grid>
      </Grid>
    </>
  )
}
