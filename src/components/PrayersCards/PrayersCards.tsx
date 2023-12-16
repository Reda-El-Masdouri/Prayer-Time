import React from 'react'
import Stack from '@mui/material/Stack'
import PrayersCardsProps from './PrayersCardsProps'
import PrayerCard from '../PrayerCard/PrayerCard'
import PrayerCardProps from '../PrayerCard/PrayerCardProps'
import './PrayersCards.scss'

export default function PrayersCards({ prayers }: PrayersCardsProps) {
  return (
    <div className="container-cards">
      <Stack direction="row" spacing={4}>
        {prayers.map((prayer: PrayerCardProps, index: number) => {
          return (
            <PrayerCard
              key={index}
              image={prayer.image}
              prayerName={prayer.prayerName}
              time={prayer.time}
            />
          )
        })}
      </Stack>
    </div>
  )
}
