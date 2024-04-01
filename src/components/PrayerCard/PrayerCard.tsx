import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import PrayerCardProps from './PrayerCardProps'
import './PrayerCard.scss'

export default function PrayerCard({
  image,
  prayerName,
  time,
  myWidth,
}: PrayerCardProps) {
  return (
    <div className="container-card">
      <Card sx={{ width: myWidth > 850 ? '14vw' : '50vw' }}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={prayerName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {prayerName}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {time}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}
