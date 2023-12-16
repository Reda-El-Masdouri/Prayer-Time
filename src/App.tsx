import { Container } from '@mui/system'
import Header from './components/Header/Header'
import Divider from '@mui/material/Divider'
import './style.scss'
import PrayersCards from './components/PrayersCards/PrayersCards'
import PrayerCardProps from './components/PrayerCard/PrayerCardProps'
import Selector from './components/Selector/Selector'

export const App = () => {
  const prayers: PrayerCardProps[] = [
    {
      image: require('../public/images/fajr-prayer.png'),
      prayerName: 'AL-Fajr',
      time: '06 : 30 : 09',
    },
    {
      image: require('../public/images/dhhr-prayer-mosque.png'),
      prayerName: 'AL-Duhr',
      time: '12 : 30 : 09',
    },
    {
      image: require('../public/images/asr-prayer-mosque.png'),
      prayerName: 'AL-Asr',
      time: '15 : 30 : 09',
    },
    {
      image: require('../public/images/sunset-prayer-mosque.png'),
      prayerName: 'AL-MAGHRIB',
      time: '17 : 30 : 09',
    },
    {
      image: require('../public/images/night-prayer-mosque.png'),
      prayerName: 'AL-Ishae',
      time: '18 : 30 : 09',
    },
  ]
  return (
    <Container maxWidth="xl">
      <Header />
      <Divider className="divider" />
      <PrayersCards prayers={prayers} />
      <Selector />
    </Container>
  )
}
