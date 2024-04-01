import React from 'react'
import Stack from '@mui/material/Stack'
import PrayersCardsProps from './PrayersCardsProps'
import PrayerCard from '../PrayerCard/PrayerCard'
import PrayerCardProps from '../PrayerCard/PrayerCardProps'
import './PrayersCards.scss'
import { useWindowWidth } from '@react-hook/window-size'

export default function PrayersCards({ prayers }: PrayersCardsProps) {
  const width = useWindowWidth()
  return (
    <div className="container-cards">
      <Stack direction={width >= 850 ? 'row' : 'column'} spacing={4}>
        {prayers.map((prayer: PrayerCardProps, index: number) => {
          return (
            <PrayerCard
              key={index}
              image={prayer.image}
              prayerName={prayer.prayerName}
              time={prayer.time}
              myWidth={width}
            />
          )
        })}
      </Stack>
    </div>
  )
}
