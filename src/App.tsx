import { Container } from '@mui/system'
import Header from './components/Header/Header'
import Divider from '@mui/material/Divider'
import './style.scss'
import PrayersCards from './components/PrayersCards/PrayersCards'
import Selector from './components/Selector/Selector'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { fetchAsyncCountries, fetchAsyncPrayersTimesOfCity } from './api'
import { constructPrayersArray } from './features/utils/utils'
import Loader from './components/Loader/Loader'

export const App = () => {
  const dataCountries = useSelector((state) => state.countries)
  const prayersState = useSelector((state) => state.prayers)
  const [loading, setLoading] = useState(true)
  const needTime: string = '01:10:11'
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  useEffect(() => {
    setLoading(true)
    fetchAsyncCountries()
      .then((response) => {
        dispatch({ type: 'countries/addCountries', payload: response })
      })
      .catch(() => {
        throw new Error(`Je n'arrive pas à récupérer les pays !`)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [dispatch])
  useEffect(() => {
    setLoading(true)
    fetchAsyncPrayersTimesOfCity(
      dataCountries.selectedCountry,
      dataCountries.selectedCity
    )
      .then((response) => {
        dispatch({
          type: 'prayers/addPrayers',
          payload: constructPrayersArray({
            Fajr: response.Fajr,
            Dhuhr: response.Dhuhr,
            Asr: response.Asr,
            Maghrib: response.Maghrib,
            Isha: response.Isha,
          }),
        })
      })
      .catch(() => {
        throw new Error(
          `Je n'arrive pas à récupérer les horraire des prières pour cette ville !`
        )
      })
      .finally(() => setLoading(false))
  }, [dispatch, dataCountries.selectedCity])

  return (
    <Container maxWidth="xl">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header needTime={needTime} />
          <Divider className="divider" />
          <PrayersCards prayers={prayersState.prayers} />
          <Selector />
        </>
      )}
    </Container>
  )
}
