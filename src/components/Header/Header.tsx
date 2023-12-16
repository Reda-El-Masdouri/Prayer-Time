import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import TowTitles from '../TowTitles/TowTitles'

export default function Header() {
  return (
    <>
      <Grid container>
        <Grid xs={6}>
          <TowTitles titleH2="Jeudi 13 Décembre | 12:12" titleH1="Makkah" />
        </Grid>
        <Grid xs={6}>
          <TowTitles
            titleH2="Prochaine prière de Al-Maghrib dans"
            titleH1="1 : 13 : 22"
          />
        </Grid>
      </Grid>
    </>
  )
}
