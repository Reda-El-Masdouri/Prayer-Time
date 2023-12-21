import { Container } from '@mui/system'
import Header from './components/Header/Header'
import Divider from '@mui/material/Divider'
import './style.scss'
import PrayersCards from './components/PrayersCards/PrayersCards'
import PrayerCardProps from './components/PrayerCard/PrayerCardProps'
import Selector from './components/Selector/Selector'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { fetchAsyncCountries } from './api'
import { constructPrayersArray } from './features/utils/utils'

export const App = () => {
  const prayers: PrayerCardProps[] = constructPrayersArray({
    Fajr: '00 : 00 : 00',
    Dhuhr: '00 : 00 : 00',
    Asr: '00 : 00 : 00',
    Maghrib: '00 : 00 : 00',
    Isha: '00 : 00 : 00',
  })
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  useEffect(() => {
    fetchAsyncCountries()
      .then((response) => {
        dispatch({ type: 'countries/addCountries', payload: response })
      })
      .catch(() => {
        throw new Error('Uh-oh!')
      })
  }, [dispatch])
  return (
    <Container maxWidth="xl">
      <Header />
      <Divider className="divider" />
      <PrayersCards prayers={prayers} />
      <Selector />
    </Container>
  )
}
